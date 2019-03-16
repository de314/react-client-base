# React Client Base

This is a base project to allow for quick POC's and reduce the need to
write a lot of boiler plate for each new project.

## Goals

The following libraries and features will be setup:

- [x] Layout using Antd
- [x] Redux using [`rematch`](https://rematch.gitbooks.io/rematch/plugins/select/) and `react-redux`
  - [ ] `rematch/select`
  - [ ] `rematch/loading`
  - [ ] `rematch/persist`
  - [ ] `react-redux-toastr`
  - [ ] Entity and collection management, e.g. "Admin on Rest"-esque.
- [ ] React Router
  - [ ] Configurable Routes
  - [ ] Role/Permission Based Routing
- [ ] Authentication using Auth0
  - [ ] Integration with Redux
  - [ ] Public, Internal, Private Routes via Auth
- [ ] CMS using Contentful
- [ ] Pages
  - [ ] Anon Landing Page (via CMS), i.e. login/register
  - [ ] Auth Landing Page (via CMS)
  - [ ] Not Found
  - [ ] Server Error Page
  - [ ] Not Authorized
  - [ ] Profile Page
- [ ] Components
  - [ ] Graphs
  - [ ] Maps
  - [ ] Datagrid Redux integration
