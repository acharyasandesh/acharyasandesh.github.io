/*
Name: Sandesh Acharya
Date: April 24, 2020
Purpose: Final Project
*/

// Create store item and cart item object to store the item and the cart
// I add the music to store the music link
function StoreItem(id, name, price, qtyOnHand, maxPerCustomer, category, costOfShipping, reviews, description, image, music)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qtyOnHand = qtyOnHand;
        this.maxPerCustomer = maxPerCustomer;
        this.category = category;
        this.costOfShipping = costOfShipping;
        this.reviews = reviews;
        this.description = description;
        this.image = image;
        this.music = music;
    }

function CartItem(id, price, qty, shipping)
    {
        this.id = id;
        this.price = price;
        this.qty = qty;
        this.shipping = shipping;
    }

// Create two empty arrays to store the store item and item on cart information
var storeItems = [];
var cartItems = [];


// The function to play and pause the music when user click the image
var song = "";
var playmusic = false;

function play(url) {
    if (playmusic == false)
    {
        playmusic = true;
        song = new Audio(url);
        return song.play();
    }
    else
    {
        playmusic = false;
        return song.pause();
    }
}



// Create onloadPage() function
function onloadPage()
{
    // Get the current date, time 
    var rightnow = new Date();

    // Populate some arrays for store item
    document.getElementById("dateArea").innerHTML = "Date: " + rightnow;
    storeItems.push( new StoreItem("IWD01", "Night Visions", 10.86, 142, 10, "Alternative Rock", 5.6, "Not Reviews Yet!", "Night Visions is the debut studio album by American pop rock band Imagine Dragons. It was released on September 4, 2012, through Kidinakorner and Interscope Records. The extended version was released on February 12, 2013, adding three more songs and the UK release of the album was on March 26, 2013.", "album/nightvision.jpeg", "music/demons.m4a"));
    storeItems.push( new StoreItem("IWD02", "Smoke + Mirrors", 38.30, 234, 12, "Pop", 10.2, "", "Smoke + Mirrors is the second studio album by American pop rock band Imagine Dragons. The album was recorded during 2014 at the band's home studio in Las Vegas, Nevada.", "album/smokemirrors.jpg", "music/shots.m4a"));
    storeItems.push( new StoreItem("IWD03", "Evolve", 14.64, 5363, 15, "Pop", 3.7, "", "Evolve is the third studio album by American pop rock band Imagine Dragons, released on June 23, 2017 by Kidinakorner and Interscope Records.", "album/evolve.jpg", "music/believer.m4a"));
    storeItems.push( new StoreItem("IWD04", "Origin", 12.25, 234, 16, "Alternative Rock", 4.2, "", "Origins is the fourth studio album by the American pop rock band Imagine Dragons, released on November 9, 2018 by Kidinakorner, Polydor Records and Interscope Records.", "album/origin.png", "music/badliar.m4a"));
    storeItems.push( new StoreItem("IWD05", "After Hours", 10.86, 435, 12, "Jazz", 2.6, "", "After Hours is the fourth studio album by Canadian singer The Weeknd. The album was released by XO and Republic Records on March 20, 2020. It is The Weeknd's first studio album since 2016's Starboy, following the release of the 2018 EP My Dear Melancholy.", "album/afterhours.png", "music/bindinglights.m4a"));
    storeItems.push( new StoreItem("IWD06", "III", 10.86, 250, 4, "Country", 3.8, "", "III is the third studio album by American indie folk band the Lumineers. The album was released on September 13, 2019.", "album/iii.png", "music/ophelia.m4a"));
    storeItems.push( new StoreItem("IWD07", "Cleopatra", 25.23, 3543, 4, "Alternative Rock", 1.4, "", "Cleopatra is the second studio album by American indie folk band The Lumineers. The album was released in the United States on April 8, 2016, and contains the singles Ophelia, Cleopatra, Angela and Sleep on the Floor", "album/cleopatra.jpg", "music/sleeponthefloor.m4a"));
    storeItems.push( new StoreItem("IWD08", "The Lumineers", 17, 123, 23, "Jazz", 4.6, "", "The Lumineers are an American folk rock band based in Denver, Colorado. The founding members are Wesley Schultz and Jeremiah Fraites. Schultz and Fraites began writing and performing together in Ramsey, New Jersey in 2005. Cellist and vocalist Neyla Pekarek joined the band in 2010, and was a member until 2018.", "album/thelumineer.jpg", "music/hohey.m4a"));
    storeItems.push( new StoreItem("IWD09", "ABBA Gold", 7.5, 345, 5, "Alternative Rock", 5.43, "", "ABBA Gold: Greatest Hits is a compilation album by the Swedish pop group ABBA. It was released on 21 September 1992 through PolyGram and released in 2008 through Universal Music Australia", "album/abbagold.png", "music/dancingqueen.m4a"));
    storeItems.push( new StoreItem("IWD10", "1(Remastered)", 16, 345, 23, "Jazz", 4.24, "", "1 is a compilation album by the English rock band the Beatles, originally released on 13 November 2000. The album features virtually every number-one single the band achieved in the United Kingdom and United States from 1962 to 1970.", "album/1.jpg", "music/heyjude2.m4a"));
    storeItems.push( new StoreItem("IWD11", "Abbey Road", 250, 342, 2, "Pop", 8.88, "", "Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969 by Apple Records.", "album/abbeyroad.jpg", "music/letitbe.m4a"));
    storeItems.push( new StoreItem("IWD12", "21", 45.34, 325, 53, "Alternative Rock", 2.52, "", "21 is the second studio album by English singer-songwriter Adele. It was released on 24 January 2011 in Europe and on 22 February 2011 in North America by XL Recordings and Columbia Records. The album was named after the age of the singer during its production.", "album/21.png", "music/rollinginthedeep.m4a"));
    storeItems.push( new StoreItem("IWD13", "Dream Your Life Away", 12.42, 222, 21, "Alternative Rock", 2.42, "", "Dream Your Life Away is the debut studio album by Australian singer-songwriter Vance Joy. It was released in Australia on 5 September 2014 via Liberation Music. The album was released on 9 September 2014 in the US via Atlantic Records and worldwide via Warner Music.", "album/dreamyourlifeaway.png", "music/riptide.m4a"));
    storeItems.push( new StoreItem("IWD14", "Hope", 24.24, 99, 9, "Country", 3.13, "", "Hope is the twelfth album in the live praise and worship series of contemporary worship music by Hillsong Church. The album reached No. 3 on the ARIA Albums Chart.", "album/hope.jpg", "music/wildsun.m4a"));
    storeItems.push( new StoreItem("IWD15", "Rattle Snake", 54.42, 214, 5, "Jazz", 3.5, "", "Formed in 2008 in Toronto, Ontario, the band consists of songwriter Simon Ward on vocals and guitar, David Ritter on vocals and keys, Jon Hembrey on lead guitar, Isabel Ritchie on violin, Darryl James on bass guitar, and Jeremy Drury on drums.", "album/rattlesnake.jpg", "music/spirits.m4a"));
    storeItems.push( new StoreItem("IWD16", "American Beauty/American Psycho", 20.14, 567, 23, "Alternative Rock", 6.4, "", "", "album/americanbeauty.jpg", "music/immortals.m4a"));
    storeItems.push( new StoreItem("IWD17", "Save Rock And Roll", 14.52, 453, 2, "Country", 3.31, "", "American Beauty/American Psycho is the sixth studio album by American rock band Fall Out Boy, released on January 16, 2015 through Island Records as the follow-up to the band's comeback album Save Rock and Roll. The band wrote music while on tour with Paramore mid-2014 and it developed into a new album. ", "album/saverockandroll.jpg", "music/mysongsknow.m4a"));
    storeItems.push( new StoreItem("IWD18", "In A Perfect World", 99.99, 444, 10, "Pop", 5.32, "", "In a Perfect World is the debut studio album by Irish rock band Kodaline. The album was released in Ireland on 14 June 2013 and includes the singles High Hopes and Love Like This. On 20 June 2013 the album entered the Irish Albums Chart at number 1.", "album/inaperfectworld.jpg", "music/alliwant.m4a"));
    storeItems.push( new StoreItem("IWD19", "Politics of Living", 17.9, 36, 2, "Country", 7.23, "", "Politics of Living is the third studio album by the Irish rock band Kodaline. It was released on 28 September 2018 through labels B-Unique Records and Sony Music UK. It features prominent production collaborations with musicians such as Steve Mac, Stephen Harris, and Jonny Coffer. ", "album/politicsofliving.png", "music/highhopes.m4a"));
    storeItems.push( new StoreItem("IWD20", "Some Nights", 9.9, 12, 3, "Country", 2.22, "", "Some Nights is the second studio album by American pop rock group Fun. It was released on February 21, 2012 through Fueled by Ramen, a subsidiary of major label Warner Music Group. It was recorded in 2011 and produced by Jeff Bhasker.", "album/somenights.png", "music/weareyoung.m4a"));

    displayStoreItems();
    displayCartItems();
}

onloadPage();
displayStoreItems();

// Create the displayStoreItems() function to display the cart when the page load
function displayStoreItems()
    {	
        // The variable to get the value from currency change function
        var formatter = currencySelection();
        document.getElementById("inventoryOutput").innerHTML = "";
        var storeItemsValue = document.getElementById("displayFilter").value;

        // Create the dynamically generated table depends on what type of category is this
        var table = "";
        for (var r = 0; r < storeItems.length; r++)
            {
                if (storeItemsValue === "All")
                {
                    table += "<tr>";
                    table += "<td>" + storeItems[r].id + "</td>" + "<td>" + storeItems[r].name + "</td>" + "<td>" + formatter.format(exchangeCurrency(storeItems[r].price)) + "</td>" + "<td>" + storeItems[r].qtyOnHand + "</td>" + "<td>" +storeItems[r].maxPerCustomer + "</td>" + "<td>" + storeItems[r].category + "</td>" + "<td>" + "<img src=" + storeItems[r].image + " width=\150px\" height=\"150px\" onclick='play(\"" + storeItems[r].music +" \")'>";
                    table += "</tr>";
                }

                if (storeItemsValue === "Pop")
                {
                    if (storeItems[r].category === "Pop")
                        {
                            table += "<tr>";
                            table += "<td>" + storeItems[r].id + "</td>" + "<td>" + storeItems[r].name + "</td>" + "<td>" + formatter.format(exchangeCurrency(storeItems[r].price)) + "</td>" + "<td>" + storeItems[r].qtyOnHand + "</td>" + "<td>" +storeItems[r].maxPerCustomer + "</td>" + "<td>" + storeItems[r].category + "</td>" + "<td>" + "<img src=" + storeItems[r].image + " width=\150px\" height=\"150px\" onclick='play(\"" + storeItems[r].music +" \")'>";
                            table += "</tr>";	
                        }
                }
            
            
                if (storeItemsValue === "Jazz")
                {
                    if (storeItems[r].category === "Jazz")
                        {
                            table += "<tr>";
                            table += "<td>" + storeItems[r].id + "</td>" + "<td>" + storeItems[r].name + "</td>" + "<td>" + formatter.format(exchangeCurrency(storeItems[r].price)) + "</td>" + "<td>" + storeItems[r].qtyOnHand + "</td>" + "<td>" +storeItems[r].maxPerCustomer + "</td>" + "<td>" + storeItems[r].category + "</td>" + "<td>" + "<img src=" + storeItems[r].image + " width=\150px\" height=\"150px\" onclick='play(\"" + storeItems[r].music +" \")'>";
                            table += "</tr>";	
                        }
                }

                if (storeItemsValue === "Country")
                {
                    if (storeItems[r].category === "Country")
                        {
                            table += "<tr>";
                            table += "<td>" + storeItems[r].id + "</td>" + "<td>" + storeItems[r].name + "</td>" + "<td>" + formatter.format(exchangeCurrency(storeItems[r].price)) + "</td>" + "<td>" + storeItems[r].qtyOnHand + "</td>" + "<td>" +storeItems[r].maxPerCustomer + "</td>" + "<td>" + storeItems[r].category + "</td>" + "<td>" + "<img src=" + storeItems[r].image + " width=\150px\" height=\"150px\" onclick='play(\"" + storeItems[r].music +" \")'>";
                            table += "</tr>";	
                        }
                }
            }
        // Output the table into the web page
        document.getElementById("inventoryOutput").innerHTML += "<table border=1>" +"<tr><td>ID</td><td>Product Name</td><td>Price</td><td>Qty</td><td>Max</td><td>Category</td><td>Album Cover(Click the image to listen)</td></tr>" + table + "</table>";

    }


// Create the displayCartItems() function to display the cart when user add or remove the item from the cart
function displayCartItems()
    {
       
        var formatter = currencySelection();
        var getItem = document.getElementById("addItemId").value;
        var getQty = document.getElementById("addItemQty").value;
        var detailOutput = document.getElementById("cartOutput");

        getQty = parseFloat(getQty);
        
        // Add to cart when there aren't any items in the cart
        if (cartItems.length == 0)
            {
                for (var i = 0; i < storeItems.length; i++)
                    {
                        storeItems[i].price = parseFloat(storeItems[i].price);
                        if (getItem == storeItems[i].id && getQty <= storeItems[i].maxPerCustomer && getQty > 0)
                            {
                                detailOutput.innerHTML = "";
                                var subtotal = getQty * storeItems[i].price;
                                parseFloat(subtotal);
                                
                                cartItems.push( new CartItem(storeItems[i].id, storeItems[i].price, getQty, storeItems[i].costOfShipping));

                                detailOutput.innerHTML += storeItems[i].id + " | " + formatter.format(exchangeCurrency(storeItems[i].price)) + " | " + getQty + " | " + formatter.format(exchangeCurrency(subtotal)) + "<br>";

                                storeItems[i].qtyOnHand -= getQty;
                            }
                    }
            }

       
        // Add to cart when there is more than 1 item
        else {
            var i = 0;
            while (i < cartItems.length)
            {
                if (getItem == cartItems[i].id)
                    {
                        cartItems[i].qty = Number(cartItems[i].qty) + Number(getQty);
                        for (j = 0; j < storeItems.length; j++)
                        {   
                            // Increase the quantity of cart if the cart already has the item
                            if (storeItems[j].id == cartItems[i].id)
                                {
                                    // Invalid alert and return the quantity of the cart
                                    if (cartItems[i].qty > storeItems[j].maxPerCustomer)
                                        {
                                            alert("Maximum quantity of " + cartItems[i].id + ': ' + storeItems[j].maxPerCustomer)
                                            cartItems[i].qty = Number(cartItems[i].qty) - Number(getQty);
                                            storeItems[i].qtyOnHand -= cartItems[i].q;
                                            detailOutput.innerHTML = "";
                                            break;
                                        }
                                    else
                                        {
                                            detailOutput.innerHTML = "";
                                            var subtotal = cartItems[i].qty *  cartItems[i].price;
                                            subtotal = parseFloat(subtotal);                     
                                            break;
                                        }

                                }
                        }
                        break;
                    }
                
                else
                {
                        // If the new item is different then add a new item to cart
                        if (getItem != cartItems[i].id && i == (cartItems.length-1) && getQty > 0)
                        {
                            
                            detailOutput.innerHTML = "";
                            // Add another one to cart
                            
                                for (var j = 0; j < storeItems.length; j++)
                                    if (getItem == storeItems[j].id && getQty > storeItems[j].maxPerCustomer)
                                    {
                                        alert (" > Max per person onhand");
                                        
                                        break;
                                    }
                                    else if (getItem == storeItems[j].id && getQty <= storeItems[j].maxPerCustomer) {
                                        cartItems.push( new CartItem(storeItems[j].id, storeItems[j].price, getQty, storeItems[j].costOfShipping));

                                        break;
                                    }
                            break;
                        }                    
                    i++;
                }
                
            }
            
            // Output the cart again
            for (z = 0; z < cartItems.length; z++)
                {
                detailOutput.innerHTML += cartItems[z].id + " | " + formatter.format(exchangeCurrency(cartItems[z].price)) + " | " + cartItems[z].qty + " | " + formatter.format(exchangeCurrency(cartItems[z].price * cartItems[z].qty)) + "<br>";
                }
        }
        // Calculate the cart whenever an item is added
        calculateCartTotals();
    }
                            
// Display the cart when the currency is changed
function displayAgainCart() 
{
    var formatter = currencySelection();
    var detailOutput = document.getElementById("cartOutput");
    detailOutput.innerHTML = '';
    for (j = 0; j < storeItems.length; j++)
    {
        for (i = 0; i < cartItems.length; i++)
        {
            if (cartItems[i].id == storeItems[j].id)
                {
                    cartItems[i].price = storeItems[j].price;
                    var subtotal = cartItems[i].price * cartItems[i].qty;
                    

                    detailOutput.innerHTML += cartItems[i].id + " | " + formatter.format(exchangeCurrency(cartItems[i].price)) + " | " + cartItems[i].qty + " | " + formatter.format(exchangeCurrency(subtotal)) + "<br>";
                }
        }
    }
}

// Create calculateCartTotals() function to calculate all the items in the cart
function calculateCartTotals()
    {
        var formatter = currencySelection();
        var itemsSubtotal = 0;
        var estimatedShipping = 0;
        var subtotal = 0;
        var estimatedTax = 0;
        var orderTotal = 0;
        var checkoutOutput = document.getElementById("cartCheckout");
        
        for (var i = 0; i < cartItems.length; i++)
            {
                itemsSubtotal += (cartItems[i].price * cartItems[i].qty);
                estimatedShipping += cartItems[i].shipping;
            }
        
        subtotal = itemsSubtotal + estimatedShipping;
        estimatedTax = subtotal * 0.13;
        orderTotal = subtotal + estimatedTax;

        checkoutOutput.innerHTML = "Items Subtotal: " + formatter.format(exchangeCurrency(itemsSubtotal)) + "<br>" + "Estimated Shipping: " + formatter.format(exchangeCurrency(estimatedShipping)) + "<br><br>" + "Subtotal: " + formatter.format(exchangeCurrency(subtotal)) + "<br>" + "Estimated Tax: " + formatter.format(exchangeCurrency(estimatedTax)) + "<br>" + "Order Total: " + formatter.format(exchangeCurrency(orderTotal));
    }


// Crate the currencySelection() function to change the currency on the page
function currencySelection()
    {
        // Get the value from page. Create the format for each currency. When user choose which type of currency they want. Return the value to the function
        var formatter = "";
        if (document.getElementById("currencySelector").value == "CAD")
            {
                formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'CAD',
                minimumFractionDigits: 2
                })
            }

        else if (document.getElementById("currencySelector").value == "JPY")
            {
                formatter = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY',
                minimumFractionDigits: 2
                })
            }
        
        else if (document.getElementById("currencySelector").value == "EUR")
            {
                formatter = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 2
                })
            }
        return formatter;
    }

    // Exchange the value of currency for each country 
    function exchangeCurrency(money) {
        if (document.getElementById("currencySelector").value == "CAD") {
            return money;
        }
        else if (document.getElementById("currencySelector").value == "JPY") {
            return money * 76.64; 
        }	
        else if (document.getElementById("currencySelector").value == "EUR") {
            return money * 0.66;
        }	
    }

    // I have integrated the addToCart() function into the displayToCart() function
    function addToCart()
        {

        }

    // Create the removeFromCart function() to remove the item or the quantity.
    function removeFromCart()
        {
            var formatter = currencySelection();
            var itemID = document.getElementById("addItemId").value;
            var qtyID = document.getElementById("addItemQty").value;
            var detailOutput = document.getElementById("cartOutput");
            detailOutput.innerHTML = "";

            for (var i = 0; i < cartItems.length; i++)
                {
                    if (itemID == cartItems[i].id && qtyID == cartItems[i].qty)
                        {
                            cartItems.splice(i, 1);
                            if (cartItems.length > 0)
                            {
                                for( x=0; x < cartItems.length; x++)
                                {
                                detailOutput.innerHTML += cartItems[x].id + " | " + formatter.format(cartItems[x].price) + " | " + cartItems[x].qty + " | " + formatter.format(exchangeCurrency(subtotal)) + "<br>";
                                }
                                i = x;
                                displayAgainCart();
                            }
                        }
                    else if (itemID == cartItems[i].id && qtyID < cartItems[i].qty && qtyID > 0 && qtyID !== "")
                        {
                            cartItems[i].qty = cartItems[i].qty - qtyID;
                            var subtotal = cartItems[i].price * cartItems[i].qty;
                            detailOutput.innerHTML += cartItems[i].id + " | " + formatter.format(cartItems[i].price) + " | " + cartItems[i].qty + " | " + formatter.format(exchangeCurrency(subtotal)) + "<br>";
                            displayAgainCart();
                            calculateCartTotals();
                        }
                        calculateCartTotals();
                }
                calculateCartTotals();
                displayAgainCart();
        }

    // Create the validation() function for the webpage
    function validation()
        {

            var itemIDCheck = document.getElementById("addItemId").value;
            var outputItemID = document.getElementById("addIDValidationMessage");
            var qtyIDCheck = document.getElementById("addItemQty").value;
            var outputqty = document.getElementById("addQtyValidationMessage")
            
            outputqty.innerHTML = "";
            

            // Validation for ID
            for (var i = 0; i < storeItems.length; i++)
            {
                if (itemIDCheck == "")
                {
                    outputItemID.innerHTML = "Please enter the ID of the product!" 
                }

                else if (itemIDCheck !== storeItems[i].id)
                {
                    outputItemID.innerHTML = "Please re-check and enter the right ID of the product!";
                }							

                else if (itemIDCheck == storeItems[i].id)
                {
                    outputItemID.innerHTML = "";
                    break;
                }
            }
            
            // Validation for Quantity
            for (var i = 0; i < storeItems.length; i++)
            {
                storeItems[i].maxPerCustomer = parseFloat(storeItems[i].maxPerCustomer);
                storeItems[i].qtyOnHand = parseFloat(storeItems[i].qtyOnHand);
                
                if (storeItems[i].id == itemIDCheck)
                    if (qtyIDCheck < 1)
                    {
                        outputqty.innerHTML = "The quantity should be larger than 0!";
                    }
                    
                    else if (qtyIDCheck > storeItems[i].qtyOnHand)
                    {
                        outputqty.innerHTML = "There are not enough in stock!";
                    }
                    
                    else if (qtyIDCheck > storeItems[i].maxPerCustomer)
                    {
                        outputqty.innerHTML = "You exceed the number allow for each customer!";
                    }

            }
        }
    
    // Display the item details when the user click on that button
    function displayItemDetails()
        {
            var formatter = currencySelection();
            var detailCheck = document.getElementById("addItemId").value;
            for (var i = 0; i < storeItems.length; i++)
                {
                    if (detailCheck == storeItems[i].id)
                        {
                            alert("Item Details: \n ID: " + storeItems[i].id + "\n Product: Item #" + (i + 1) + " \n Price: " + formatter.format(exchangeCurrency(storeItems[i].price)) + "\n Qty Available: " + storeItems[i].qtyOnHand + "\n Max Per Customer: " + storeItems[i].maxPerCustomer + "\n Cost of Shipping: " + formatter.format(exchangeCurrency(storeItems[i].costOfShipping)) + "\n\n Description: \n" + storeItems[i].description + "\n\n Reviews: \n" + storeItems[i].reviews);
                        }
                }
        }
    
    // Create the reviewItem() function for user to review
    function reviewItem()
        {
            var review = document.getElementById("reviewId").value;
            for	(var i = 0; i < storeItems.length; i++)
            {
                if (review == storeItems[i].id)
                    {
                        storeItems[i].reviews = document.getElementById("reviewDesc").value;
                        alert("You have successfully posted a review for album " + storeItems[i].name + ": \n " + storeItems[i].reviews);
                        break;
                    }                
                
            }
            for (var i = 0; i < storeItems.length; i++)
                {
                    var ID = storeItems[i].id;
                    if (ID == review)
                        {
                            break;
                        }
                }
                if (ID !== review)
                {
                    alert("Please recheck you items ID!");
                }

        }