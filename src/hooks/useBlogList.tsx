import { supabase } from "@/lib/supabaseInit";
import { useState, useEffect } from "react";

export default function useBlogList() {
    const [storage, setStorage] = useState<Notice[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from('Blog').select('Created,id,title,shortDesc');
                if (!error && data) {
                    setStorage(data as Notice[]);
                }
            } catch (error) {
                console.error('Error@useBlogList');
            }
        };

        fetchData();
    }, []);

    return storage;
}
