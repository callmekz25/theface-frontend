## Architecture

Frontend follows a layered architecture:

Component -> Hook -> Service -> API

Components must not call API directly.

Example flow:

ProductPage
-> useProducts()
-> productService.getProducts()
-> axios call

---
