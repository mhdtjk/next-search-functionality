'use client'

import { useSearchParams } from "next/navigation"
import * as actions from "@/actions"

export default function SearchInput() {
    const searchParams = useSearchParams()
    const term = searchParams.get('term')

    return (
        <form action={actions.search}>
            <input name="term" type="text" defaultValue={term || ""} className="text-black p-2 rounded" />
        </form>
    )
}
