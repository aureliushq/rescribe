import { GithubIcon, SunIcon } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router'
import invariant from 'tiny-invariant'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { RescribeContext, type RescribeContextData } from '@/providers'
import { SIDEBAR_WIDTH } from '../ui/sidebar'

const DashboardHeader = () => {
	const { config, params } = useContext<RescribeContextData>(RescribeContext)
	invariant(config, '`config` is required.')

	const basePath = config.basePath ?? ''

	return (
		<header
			className={`sticky w-[calc(100vw-${SIDEBAR_WIDTH})] h-16 px-4 flex items-center justify-between z-20`}
		>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						{params?.root ? (
							<BreadcrumbPage>
								<BreadcrumbLink asChild>
									<Link to={basePath}>Home</Link>
								</BreadcrumbLink>
							</BreadcrumbPage>
						) : (
							<BreadcrumbLink asChild>
								<Link to={basePath}>Home</Link>
							</BreadcrumbLink>
						)}
					</BreadcrumbItem>
					{params?.section === 'collections' &&
						params.action === 'list' && (
							<>
								<BreadcrumbSeparator />
								<BreadcrumbItem>Collections</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>
										{
											config?.collections[
												params?.collection
											].label
										}
									</BreadcrumbPage>
								</BreadcrumbItem>
							</>
						)}
					{params?.section === 'settings' && (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Settings</BreadcrumbPage>
							</BreadcrumbItem>
						</>
					)}
				</BreadcrumbList>
			</Breadcrumb>
			<section className='flex items-center gap-2'>
				<a
					href='https://github.com/aureliushq/rescribe'
					rel='noreferrer'
					target='_blank'
				>
					<Button size='icon' variant='ghost'>
						<GithubIcon />
					</Button>
				</a>
				{/* TODO: make this functional */}
				<Toggle>
					<SunIcon />
				</Toggle>
			</section>
		</header>
	)
}

export default DashboardHeader
