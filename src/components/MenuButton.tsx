import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function MenuButton({ url, children }) {
	const { pathname } = url;

	return (
		<Menu as="div" className="relative md:hidden">
			<div>
				<Menu.Button className="text-zinc-300 rounded-full cursor-pointer hover:text-white">
					{children}
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-900 border border-zinc-700/40 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
						<Menu.Item>
							<a
								href="/about"
								className={`${
									pathname === '/about' ? 'text-white' : 'text-zinc-500'
								} block px-4 py-2 text-sm hover:bg-zinc-800/50`}
							>
								About
							</a>
						</Menu.Item>
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
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
