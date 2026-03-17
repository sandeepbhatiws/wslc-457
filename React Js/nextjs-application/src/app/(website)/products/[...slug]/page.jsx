'use client'
import ProductListing from '@/app/Components/ProductListing'
import { useParams } from 'next/navigation';
import React from 'react'

export default function page() {

    const params = useParams();

  return (
    <>
        <ProductListing slug={ params.slug[0] }/>
    </>
  )
}
