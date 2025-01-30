import { redirect } from 'next/navigation'
import React from 'react'

interface PageProps {
    searchParams: Promise<{
        term: string
    }>
}

export default async function page({ searchParams }: PageProps) {    
    const { term } = await searchParams

    if (!term) {
        redirect('/')
    }

    return (
        <div>{term}</div>
    )
}
