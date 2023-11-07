import { supabase } from "@/util/supabaseInit";
import { useState, useEffect } from "react";

export default function useBlogList() {
    const [storage, setStorage] = useState<BlogList[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from('Blog').select('created,id,title,shortDesc');
                if (!error && data) {
                    setStorage(data);
                }
            } catch (error) {
                console.error('Error@useBlogList');
            }
        };

        fetchData();
    }, []);

    return storage;
}
