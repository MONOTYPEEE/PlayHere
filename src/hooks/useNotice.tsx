import { supabase } from "@/lib/supabaseInit";
import { useState, useEffect } from "react";

interface Notice {
    Created: string;
    id: string;
    title: string;
    body: string;
    coverURL: string;
    shortDesc: string;
}

export default function useNotice() {
    const [storage, setStorage] = useState<Notice[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from('notice').select();
                if (!error && data) {
                    setStorage(data as Notice[]);
                }
            } catch (error) {
                console.error('Error@useNotice');
            }
        };

        fetchData();
    }, []);

    return storage;
}
