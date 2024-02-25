export interface File {
  name: string
  children?: File[]
}


export const files2: File[] = [
  {
    name: 'root',
    children: [
      {
        name: 'folder1',
        children: [
          {
            name: 'subfolder1-1',
            children: [
              { name: 'file1-1-1.txt' },
              { name: 'file1-1-2.txt' },
              { name: 'file1-1-3.txt' },
            ]
          },
          {
            name: 'subfolder1-2',
            children: [
              { name: 'file1-2-1.txt' },
              { name: 'file1-2-2.txt' },
              { name: 'file1-2-3.txt' },
              { name: 'file1-2-4.txt' },
            ]
          }
        ]
      },
      {
        name: 'folder2',
        children: [
          {
            name: 'subfolder2-1',
            children: [
              { name: 'file2-1-1.txt' },
              { name: 'file2-1-2.txt' },
              { name: 'file2-1-3.txt' },
              { name: 'file2-1-4.txt' },
            ]
          },
          {
            name: 'subfolder2-2',
            children: [
              { name: 'file2-2-1.txt' },
              { name: 'file2-2-2.txt' },
              { name: 'file2-2-3.txt' },
              { name: 'file2-2-4.txt' },
            ]
          },
          {
            name: 'subfolder2-3',
            children: [
              { name: 'file2-3-1.txt' },
              { name: 'file2-3-2.txt' },
              { name: 'file2-3-3.txt' },
              { name: 'file2-3-4.txt' },
            ]
          }
        ]
      },
      {
        name: 'file3.txt',
      },
      {
        name: 'folder3',
        children: [
          {
            name: 'subfolder3-1',
            children: [
              { name: 'file3-1-1.txt' },
              { name: 'file3-1-2.txt' },
              { name: 'file3-1-3.txt' },
              { name: 'file3-1-4.txt' },
            ]
          },
          {
            name: 'subfolder3-2',
            children: [
              { name: 'file3-2-1.txt' },
              { name: 'file3-2-2.txt' },
              { name: 'file3-2-3.txt' },
              { name: 'file3-2-4.txt' },
            ]
          },
          {
            name: 'subfolder3-3',
            children: [
              { name: 'file3-3-1.txt' },
              { name: 'file3-3-2.txt' },
              { name: 'file3-3-3.txt' },
              { name: 'file3-3-4.txt' },
            ]
          }
        ]
      }
    ]
  }
];

export const files3: File[] = [
  {
    name: 'root',
    children: [
      {
        name: 'folder1',
        children: [
          {
            name: 'folder1-1',
            children: [
              {
                name: 'folder1-1-1',
                children: [
                  {
                    name: 'folder1-1-1-1',
                    children: [
                      {
                        name: 'folder1-1-1-1-1',
                        children: [
                          { name: 'file1-1-1-1-1-1.txt' },
                          { name: 'file1-1-1-1-1-2.txt' },
                          { name: 'file1-1-1-1-1-3.txt' },
                        ]
                      },
                      {
                        name: 'folder1-1-1-1-2',
                        children: [
                          { name: 'file1-1-1-1-2-1.txt' },
                          { name: 'file1-1-1-1-2-2.txt' },
                          { name: 'file1-1-1-1-2-3.txt' },
                        ]
                      },
                      {
                        name: 'folder1-1-1-1-3',
                        children: [
                          { name: 'file1-1-1-1-3-1.txt' },
                          { name: 'file1-1-1-1-3-2.txt' },
                          { name: 'file1-1-1-1-3-3.txt' },
                        ]
                      },
                    ]
                  },
                  {
                    name: 'folder1-1-1-2',
                    children: [
                      {
                        name: 'folder1-1-1-2-1',
                        children: [
                          { name: 'file1-1-1-2-1-1.txt' },
                          { name: 'file1-1-1-2-1-2.txt' },
                          { name: 'file1-1-1-2-1-3.txt' },
                        ]
                      },
                      {
                        name: 'folder1-1-1-2-2',
                        children: [
                          { name: 'file1-1-1-2-2-1.txt' },
                          { name: 'file1-1-1-2-2-2.txt' },
                          { name: 'file1-1-1-2-2-3.txt' },
                        ]
                      },
                      {
                        name: 'folder1-1-1-2-3',
                        children: [
                          { name: 'file1-1-1-2-3-1.txt' },
                          { name: 'file1-1-1-2-3-2.txt' },
                          { name: 'file1-1-1-2-3-3.txt' },
                        ]
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
    ]
  },
];