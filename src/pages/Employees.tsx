import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
} from '@syncfusion/ej2-react-grids';

import {
  employeesData,
  employeesGrid,
  gridEmployeeCountry,
  gridEmployeeProfile,
} from '../data/dummy';
import { Header } from '../components';
import { useTranslation } from 'react-i18next';

const Employees: React.FC = () => {
  const { t } = useTranslation();

  const employeesGrid = [
    {
      headerText: t('employees.employee'),
      width: '150',
      template: gridEmployeeProfile,
      textAlign: 'Center',
    },
    { field: 'Name', headerText: '', width: '0', textAlign: 'Center' },
    {
      field: 'Title',
      headerText: t('employees.designation'),
      width: '170',
      textAlign: 'Center',
    },
    {
      headerText: t('employees.country'),
      width: '120',
      textAlign: 'Center',
      template: gridEmployeeCountry,
    },

    {
      field: 'HireDate',
      headerText: t('employees.hireDate'),
      width: '135',
      format: 'yMd',
      textAlign: 'Center',
    },

    {
      field: 'ReportsTo',
      headerText: t('employees.reportsTo'),
      width: '120',
      textAlign: 'Center',
    },
    {
      field: 'EmployeeID',
      headerText: t('employees.employeeId'),
      width: '125',
      textAlign: 'Center',
    },
  ];

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
