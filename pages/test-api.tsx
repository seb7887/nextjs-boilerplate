import React from 'react'
import { NextPage } from 'next'
import { PageTitle } from 'components/PageTitle'
import { MainLayout } from 'layouts/MainLayout'

const IndexPage: NextPage = () => {
  return (
    <>
      <PageTitle title="Home" />
      <MainLayout>
        <h3 className="text-4xl font-extrabold">Test API</h3>
        <p className="mb-4">We all see only that which we are trained to see.</p>
      </MainLayout>
    </>
  )
}

export default IndexPage