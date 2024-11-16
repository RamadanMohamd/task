"use client";
import { useState, useEffect } from 'react';
import { BlogType } from '@/app/types/blogs';

const useFetchBlogs = (initialPage = 1) => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [page, setPage] = useState(initialPage);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [hasError, setError] = useState<boolean>(false);


    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const request = await fetch(`https://dev.to/api/articles?page=${page}&per_page=5`);
            const newBlogs: BlogType[] = await request.json();
            setBlogs((prevBlogs: BlogType[]) => [...prevBlogs, ...newBlogs]);
            setLoading(false);
            setError(false);
        } catch  {
            setError(true)
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [page]);

    const loadMore = () => {
        setPage((prevPage: number) => prevPage + 1);
    };

    return {
        blogs, isLoading, loadMore, refetch: fetchBlogs, hasError

    };
};

export default useFetchBlogs;
