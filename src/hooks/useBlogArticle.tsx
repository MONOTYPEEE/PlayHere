import { supabase } from "@/lib/supabaseInit";
import { useState, useEffect } from "react";

export default function useBlogArticle(postId: string) {
    const [storage, setStorage] = useState<BlogPost>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from('Blog').select('created,title,shortDesc,body').eq('id',postId).single();
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
