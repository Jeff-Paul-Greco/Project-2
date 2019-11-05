# Doomsday Prepper

Welcome to Doomsday Prepper, the webapp that searches and catalouges your doomsday horde. You can search and add items manually or by barcode into your inventory, then manage your horde from the inventory page. You can also save items to a wishlist to add them later!

## Instructions

1. When you visit the site, you will be directed to a login/resitration page. Please enter your information and click the button to login. You will then be directed to the search page.

2. On the search page, enter a barcode into the text field with all leading and trailing numbers and then click the submit button. Below your search result will appear with a button to add the item. If the item was not found, then clicking this button will allow you to input the name manually. Confirm or enter the item name into the modal and assign a quantity. Click the Add button to add to your inventory, or click the wishlist button to add this item to your wishlist to be added later.

3. Now that you have added items to your inventory/wishlist, click the View My Inventory link in the navbar at the top of the page. On the inventory screen, your wishlist items and current inventory will be listed in tables. Click the green plus button on a wishlist item to add it to your inventory. Click the red minus button on any entry to delete it from either the inventory or wishlist.

# Under the Hood

This website uses a variety of npm packages to route our pages, hit APIs, template our html, and write our data to a SQL database. Express is used for all of our routing. Sequelize is used to manipulate our database via both user and item models. Our API routing is set to sync with our SQL database upon each api route request. We have also used a barcode scan API to request an object back that matches a barcode entered by the user. We used Bootstrap to style our site, as well as Express Handlebars for templating. 

Deployed Link: https://jsmt-project-2.herokuapp.com/