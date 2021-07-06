import {DatePicker, Form, Popover, Select} from 'antd';
import React, {useState} from 'react';
import {Filter} from 'react-feather';
const FilterDayOffTable = () => {
	const {Option} = Select;
	function handleChange(value) {
		console.log(`selected ${value}`);
	}

	function onChange(date, dateString) {
		console.log(date, dateString);
	}

	const [showFilter, showFilterSet] = useState(false);

	const funcShowFilter = () => {
		showFilter ? showFilterSet(false) : showFilterSet(true);
	};

	const content = (
		<div className={`wrap-filter small`}>
			<Form layout="vertical">
				<div className="row">
					<div className="col-md-12">
						<Form.Item label="Modified By">
							<Select
								className="style-input"
								defaultValue="lucy"
								onChange={handleChange}
							>
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="disabled" disabled>
									Disabled
								</Option>
							</Select>
						</Form.Item>
					</div>
					<div className="col-md-12">
						<Form.Item className="mb-0">
							<button className="btn btn-primary" style={{marginRight: '10px'}}>
								Tìm kiếm
							</button>
							<button className="btn btn-success">Export</button>
						</Form.Item>
					</div>
				</div>
			</Form>
		</div>
	);

	return (
		<>
			<div className="wrap-filter-parent">
				<Popover
					placement="bottomRight"
					content={content}
					trigger="click"
					overlayClassName="filter-popover"
				>
					<button className="btn btn-secondary light btn-filter">
						<Filter />
					</button>
				</Popover>
			</div>
		</>
	);
};

export default FilterDayOffTable;
