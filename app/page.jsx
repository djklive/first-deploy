// app/page.js
'use client'

import React from 'react'
import TicTacToe from '../components/TicTacToe'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TicTacToe />
    </main>
  )
}