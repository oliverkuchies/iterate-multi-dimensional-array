# Iterate Multi Dimensional Array As String

## Usage

`let project = {
          project: {
              project_name: 'test', 
              user: {
                  first_name: 'Oliver',
                  last_name: 'KKK',
                  company: {
                      company_name: 'Bobs Machinery',
                      company_bingo: 'ddd'
                  }
            }
        }
    }
}`


iterate(project);`

## Result

`['project.project_name' : 'test',
 'user.first_name': 'Oliver',
 'user.last_name': 'KKK',
 'company.company_name': 'Bobs Machinery',
 'company.company_bingo': 'ddd']
`
