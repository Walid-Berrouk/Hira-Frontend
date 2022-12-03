import React from 'react'

export default function Footer() {
  return (
    <footer class="py-10 px-20 shadow md:flex md:items-center md:justify-between md:px-28 ">
        <span class="text-sm text-white sm:text-center dark:text-gray-300">© 2022 <a href="https://flowbite.com/" class="hover:underline">Hira™</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>
  )
}
