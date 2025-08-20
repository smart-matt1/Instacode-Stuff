import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TableConfig } from '@michelin/theme';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from '@michelin/theme';
import { StatusModule } from '@michelin/theme';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface StepData {
  example: string;
  exampleUsage: string;
  stepName: string;
  stepType: string;
}

@Component({
  selector: 'app-teststepspage',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TableModule,
    StatusModule
  ],
  templateUrl: './teststepspage.component.html'
})
export class TestStepsPageComponent implements OnInit {
  searchControl = new FormControl('');
  
  dataSource = new MatTableDataSource<StepData>([
    { example: 'N/A', exampleUsage: 'Given I submit a request with the following data', stepName: 'I submit a request with the following data', stepType: 'GIVEN' },
    { example: 'N/A', exampleUsage: 'When the response is received', stepName: 'the response is received', stepType: 'WHEN' },
    { example: 'N/A', exampleUsage: 'Then the response contains properties', stepName: 'the response contains properties', stepType: 'THEN' },
    { example: 'N/A', exampleUsage: 'Then the response contains properties with values', stepName: 'the response contains properties with values', stepType: 'THEN' },
    { example: 'username, password', exampleUsage: 'Given I am logged in to Firm portal as "nancy.barton@cgi.com.qa1.pt2" with password "Citizens4"', stepName: 'I am logged in to Firm portal as "{username}" with password "{password}"', stepType: 'GIVEN' },
    { example: 'seconds', exampleUsage: 'Given I wait "3" seconds', stepName: 'I wait "{seconds}" seconds', stepType: 'GIVEN' },
    { example: 'locator', exampleUsage: 'When I click "LAW_FIRM_CONFLICT_INVOICE_TAB"', stepName: 'I click "{locator}"', stepType: 'WHEN' },
    { example: 'N/A', exampleUsage: 'When I take a screenshot', stepName: 'I take screenshot', stepType: 'WHEN' },
    { example: 'sheet_name, file_path, df_name', exampleUsage: 'Given I read data from a sheet "Sheet1" of an Excel file "data.xlsx" into a dataframe "df1"', stepName: 'I read data from a sheet "{sheet_name}" of an Excel file "{file_path}" into a dataframe "{df_name}"', stepType: 'GIVEN' },
    { example: 'df_name, row_count', exampleUsage: 'Then the number of rows in dataframe "df1" should be "10"', stepName: 'the number of rows in dataframe "{df_name}" should be "{row_count}"', stepType: 'THEN' }
  ]);

  tableConfig: TableConfig<StepData> = {
    columns: {
      example: { 
        cell: (item: StepData) => item.example, 
        header: 'Example' 
      },
      exampleUsage: { 
        cell: (item: StepData) => item.exampleUsage, 
        header: 'Example' 
      },
      stepName: { 
        cell: (item: StepData) => item.stepName, 
        header: 'Step Name' 
      },
      stepType: { 
        cell: (item: StepData) => item.stepType, 
        header: 'Step Type' 
      }
    }
  };

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(value => {
      this.dataSource.filter = value?.trim().toLowerCase() || '';
    });
  }
}