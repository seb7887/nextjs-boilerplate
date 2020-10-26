import React from 'react'
import { NextPage } from 'next'
import { PageTitle } from 'components/PageTitle'
import { MainLayout } from 'layouts/MainLayout'

const IndexPage: NextPage = () => {
  return (
    <>
      <PageTitle title="Home" />
      <MainLayout>
        <h3 className="font-sans">Hello World!</h3>
      </MainLayout>
    </>
  )
}

export default IndexPage