import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export default function ProjectInfo({
  description,
  children
}: {
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Popover className="relative h-6 w-6">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        {children}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-1 flex w-screen max-w-min -translate-x-1/2 px-4">
          <p className="w-64 shrink rounded-xl bg-white p-4 text-center text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            {description}
          </p>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
