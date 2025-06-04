'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export default function Component() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading session...</div>
  }

  if (session?.user?.email) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
