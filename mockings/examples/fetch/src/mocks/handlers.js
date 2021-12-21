import { rest } from 'msw'

export const handlers = [
  rest.get('./login', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'dkdk-dkdkd-djddj',
        firstName: 'john',
        lastName: 'Maverrick',
      }),
    )
  }),
  rest.get('', async (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          people: [
            {
              name: 'jimmy',
              age: 135,
            },
            {
              name: 'timmy',
              age: 13,
            },
            {
              name: 'cindy',
              age: 15,
            },
            {
              name: 'judy',
              age: 25,
            },
            {
              name: 'marry',
              age: 64,
            },
            {
              name: 'tommy',
              age: 109,
            },
          ],
        },
      }),
    )
  }),
]
