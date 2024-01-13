import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function MenuButton({ url, children }: { url: URL; children: React.ReactNode }) {
	const { pathname } = url;

	return (
		<Menu as="div" className="relative md:hidden">
			<Menu.Button className="mx-2 flex h-6 cursor-pointer items-center rounded-full text-zinc-300 hover:text-white">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
				</svg>
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-700/40 bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							<a
								href="/"
								className={`${
									pathname === '/' ? 'text-white' : 'text-zinc-500'
								} block px-4 py-2 text-sm hover:bg-zinc-800/50`}
							>
								Home
							</a>
						</Menu.Item>

						{/* <Menu.Item>
							<a
								href="/about"
								className={`${
									pathname === '/about' ? 'text-white' : 'text-zinc-500'
								} block px-4 py-2 text-sm hover:bg-zinc-800/50`}
							>
								About
							</a>
						</Menu.Item> */}

						<Menu.Item>
							<a
								href="/blog"
								className={`${
									pathname === '/blog' ? 'text-white' : 'text-zinc-500'
								} block px-4 py-2 text-sm hover:bg-zinc-800/50`}
							>
								Blog
							</a>
						</Menu.Item>

						<Menu.Item>
							<a
								href="/portfolio"
								className={`${
									pathname === '/portfolio' ? 'text-white' : 'text-zinc-500'
								} block px-4 py-2 text-sm hover:bg-zinc-800/50`}
							>
								Portfolio
							</a>
						</Menu.Item>

						{children}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
