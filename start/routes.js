'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')
const User = use('App/Models/User')

Route.group(() => {
  Route.get('/', ({ view }) => {
    return view.render('login')
  })

  Route.post('login', async ({ auth, response }) => {
    const user = await User.first()
    await auth.login(user)
    return response.redirect('dashboard')
  })
}).middleware(['guest'])

Route.group(() => {
  Route.get('logout', async ({ auth, response }) => {
    await auth.logout()
    return response.redirect('/')
  })

  Route.get('dashboard', ({ view }) => {
    return view.render('dashboard')
  })
}).middleware(['auth', 'preventBackHistory'])

