import { useContext } from 'react'
import { Link } from 'react-router'
import { PanelRightIcon } from 'lucide-react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { PATHS } from '@/lib/constants'
import { RescribeContext, type RescribeContextData } from '@/providers'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import type { Labels } from '@/components/rescribe'

const EditorHeader = ({ labels }: { labels: Labels | undefined }) => {
	const { config, params } = useContext<RescribeContextData>(RescribeContext)

	return (
		<header className='w-full h-16 px-4 flex items-center justify-between'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to={PATHS.BASE}>Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					{(params?.action === 'create' ||
						params?.action === 'edit') && (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem>Collections</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>
									{
										config?.collections[params?.collection]
											.label
									}
								</BreadcrumbPage>
							</BreadcrumbItem>
						</>
					)}
				</BreadcrumbList>
			</Breadcrumb>
			<section className='flex items-center gap-2'>
				{params?.action === 'edit' && (
					<Button size='sm' variant='ghost'>
						Publish
					</Button>
				)}
				<Sheet>
					<SheetTrigger asChild>
						<Button size='icon' variant='ghost'>
							<PanelRightIcon />
						</Button>
					</SheetTrigger>
					<SheetContent
						className='[&>button]:hidden p-0'
						side='right'
					>
						<SheetHeader className='h-16 px-4 flex flex-row items-center justify-between space-y-0'>
							<SheetTitle>{`${labels?.singular} Settings`}</SheetTitle>
							<SheetClose asChild>
								<Button size='icon' variant='ghost'>
									<PanelRightIcon />
								</Button>
							</SheetClose>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</section>
		</header>
	)
}

export default EditorHeader
