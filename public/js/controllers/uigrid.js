app.controller('UiGridDemoCtrl', ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {
    $scope.gridOptionsSimple = {
        data: [
            {
                "name": "许坤",
                "gender": "男",
                "company": "**部门"
            },
            {
                "name": "周雪楠",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "陈珂",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "韦躐晟",
                "gender": "男",
                "company": "**部门"
            },
            {
                "name": "徐青青",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "张腾飞",
                "gender": "男",
                "company": "**部门"
            },
            {
                "name": "张倩",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "王思思",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "倪妮",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "朱玲玲",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "王志辉",
                "gender": "男",
                "company": "**部门"
            },
            {
                "name": "李璇",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "王鹏",
                "gender": "男",
                "company": "**部门"
            },
            {
                "name": "韦佳",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "孙乐",
                "gender": "男",
                "company": "**部门"
            },
            {
                "name": "王志波",
                "gender": "男",
                "company": "**部门"
            },
            {
                "name": "孙婧琪",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "戴亮",
                "gender": "男",
                "company": "**部门"
            },
            {
                "name": "许琼琼",
                "gender": "女",
                "company": "**部门"
            },
            {
                "name": "陈科",
                "gender": "男",
                "company": "**部门"
            }
        ]
    };
      
      $scope.gridOptionsComplex = {
        enableFiltering: true,
        showFooter: true,
        columnDefs: [
          { name: 'name', aggregationType: uiGridConstants.aggregationTypes.count, width: 150 },
          { name: 'gender', filter: { term: 'male' }, width: 150, enableCellEdit: false, 
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
              if (grid.getCellValue(row,col) === 'male') {
                return 'blue';
              } else if (grid.getCellValue(row,col) === 'female') {
                return 'pink';
              }
            } 
          },
          { name: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, width: 100 },
          { name: 'company', enableFiltering: false, width: 200 }
        ],
        data: [
          {
              "name": "Ethel Price",
              "gender": "female",
              "company": "Enersol",
              "age": 25
          },
          {
              "name": "Claudine Neal",
              "gender": "female",
              "company": "Sealoud",
              "age": 19
          },
          {
              "name": "Beryl Rice",
              "gender": "female",
              "company": "Velity",
              "age": 44
          },
          {
              "name": "Wilder Gonzales",
              "gender": "male",
              "company": "Geekko",
              "age": 26
          },
          {
              "name": "Georgina Schultz",
              "gender": "female",
              "company": "Suretech",
              "age": 53
          },
          {
              "name": "Carroll Buchanan",
              "gender": "male",
              "company": "Ecosys",
              "age": 64
          },
          {
              "name": "Valarie Atkinson",
              "gender": "female",
              "company": "Hopeli",
              "age": 35
          },
          {
              "name": "Schroeder Mathews",
              "gender": "male",
              "company": "Polarium",
              "age": 29
          },
          {
              "name": "Lynda Mendoza",
              "gender": "female",
              "company": "Dogspa",
              "age": 49
          },
          {
              "name": "Sarah Massey",
              "gender": "female",
              "company": "Bisba",
              "age": 40
          },
          {
              "name": "Robles Boyle",
              "gender": "male",
              "company": "Comtract",
              "age": 32
          },
          {
              "name": "Evans Hickman",
              "gender": "male",
              "company": "Parleynet",
              "age": 38
          },
          {
              "name": "Dawson Barber",
              "gender": "male",
              "company": "Dymi",
              "age": 21
          },
          {
              "name": "Bruce Strong",
              "gender": "male",
              "company": "Xyqag",
              "age": 61
          },
          {
              "name": "Nellie Whitfield",
              "gender": "female",
              "company": "Exospace",
              "age": 54
          },
          {
              "name": "Jackson Macias",
              "gender": "male",
              "company": "Aquamate",
              "age": 49
          },
          {
              "name": "Pena Pena",
              "gender": "male",
              "company": "Quarx",
              "age": 25
          },
          {
              "name": "Lelia Gates",
              "gender": "female",
              "company": "Proxsoft",
              "age": 54
          },
          {
              "name": "Alfred Oscar",
              "gender": "male",
              "company": "Transprop",
              "age": 34
          },
          {
              "name": "John Alfred",
              "gender": "male",
              "company": "Haymans",
              "age": 70
          },
          {
              "name": "Leonie Warren",
              "gender": "female",
              "company": "Hilltop",
              "age": 25
          },
          {
              "name": "Belinda Gosford",
              "gender": "female",
              "company": "Archison",
              "age": 42
          },
          {
              "name": "Tracey Misoni",
              "gender": "female",
              "company": "Verizona",
              "age": 34
          },
          {
              "name": "Trevino Moreno",
              "gender": "male",
              "company": "Conjurica",
              "age": 31
          }
        ]
      };
}]);