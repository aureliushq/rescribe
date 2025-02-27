import type { SelectField as SelectFieldType } from '@rescribe/common'

import { Label } from '~/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '~/components/ui/select'

type SelectProps = Omit<SelectFieldType, 'type'>

// TODO: controlled operation
const SelectField = ({
	description,
	label,
	options,
	placeholder = 'Select',
}: SelectProps) => {
	return (
		<div className='rs-flex rs-items-center rs-justify-between rs-flex-wrap rs-gap-2'>
			<div className='rs-grid rs-gap-1.5 rs-leading-none'>
				<Label>{label}</Label>
				{description && (
					<p className='rs-text-sm rs-text-muted-foreground'>
						{description}
					</p>
				)}
			</div>
			<Select>
				<SelectTrigger className='rs-w-[180px]'>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{options.map((item) => (
						<SelectItem key={item.value} value={item.value}>
							{item.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}

export default SelectField
