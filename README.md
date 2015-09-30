![monomer logo](https://raw.githubusercontent.com/develasquez/monomer/master/monomer.svg)
## monomer

* The easy way to increase the usability of your web project, based on Google polymer-project.
* Transforming a simple HTML tag into an experience just by adding one CSS Class.

## Components

### Header

The __Header__ element is very easy to use, you only need to create a div or header element and add the "__header__" class.

```HTML
<header class="header red">
</header>
```
You can add accions elements like Menu button , a title or a context menu.

```HTML
<div class="header red z-d1">
    <button class="expand-LeftMenu button-left icon-bars icon-1x icon-white" arrows-alt></button>
    <h3 class="color-white">My App</h3>
    <div class="options">
        <button class="expand-config button-right icon-ellipsis-v icon-1x icon-white" target=".configMenu">
        </button>
        <ul class="configMenu background_control card z-d1 divider">
            <li>Op 1</li>
            <li>Op 2</li>
            <li>Op 3</li>
            <li>Op 4</li>
        </ul>
    </div>
</div>
```

This element is placed at the top of your page.

### Footer
	
The __Footer__ is very easy too.

```HTML 	
<footer class="footer background_control">
</footer>
```

The __Footer__ element is so amazing, because, it have a hidden content, this is displayed at swipe-up from the footer or clicking over an element with the class "__expand-Footer__"

```HTML
<footer class="footer background_control z-d1">
    <div class="footerHeader">
        <img src="img/user.png" alt="" class="expand-Footer button-left">
        <p>Detail</p>
    </div>
    <div class="footerContent">
        ...
    </div>
    <div class="footerFooter">
        ...
    </div>
</footer>
```
### Menus

`Left Menu`, to expand the left menu you must to add an element with the "__expand-LeftMenu__" class, for example add this in the _header_ element.

```HTML
<nav class="leftMenu z-d1 background_control">
    <ul class="list advanced ">
        <li>
            <div>
                <div class="test_box fab z-d1">
                    <i class="icon-search color-black"></i>
                </div>
            </div>
            <div>
                <div>
                    <h3>Menu Item</h3>
                    <p>Item detail</p>
                </div>
            </div>
        </li>
    </ul>
</nav>
```
`Right Menu`, to expand the right menu you must to add an element with the "__expand-RightMenu__" class, for example add this in the _header_ element.

```HTML
<nav class="rightMenu z-d1 background_control">
    <ul class="list advanced ">
        <li>
            <div>
                <div class="test_box fab z-d1">
                    <i class="icon-search color-black"></i>
                </div>
            </div>
            <div>
                <div>
                    <h3>Menu Item</h3>
                    <p>Item detail</p>
                </div>
            </div>
        </li>
    </ul>
</nav>
```

`Config Menu`, to expand the context menu you must to add an element with the __ target __="_#ctxMnu_" attribute including the css selector to refer the context menu element.

```HTML
<button class="expand-config button-right icon-ellipsis-v icon-1x icon-white" target="#ctxMnu"></button>
...
<ul id="ctxMnu" class="configMenu background_control card z-d1 divider">
    <li>Element A</li>
    <li>Element B</li>
    <li>Element C</li>
    <li>Element D</li>
</ul>
```

### Pages

The pages are a simple way to manage logically the content of your app, a page use the 100% of your screen.

`HTML`

```HTML
<div class="page" id="myPage">
    <div class="header red z-d1">
        ...
    </div>
    <div class="content">
        ...
    </div>
    <div class="footer background_control">
        ...
    </div>
<div>
```

`Javascript`

```JS
monomer.pageShow("#myPage");
...
monomer.pageHide("#myPage");
```

### Buttons

Basically the next kind of buttons.

`Raised Buttons`

```HTML
<button class="raised-button red color-white ">Crear</button>
```
`Floating Button`

```HTML
<button class="floating-button floating-down-right red">
    <i class="icon-plus icon-white"></i>
</button>
```
### Forms

### Cards
```HTML
<div class="card card_4 background_control">
    <div class="media grey aspect_1_1">
        <img src="img/some.png">
    </div>
    <div class="text">
        <h3 class="nombreLista">Detail</h3>
    </div>
</div>
```
### Popups

`HTML`

```HTML
<div class="modal-dialog card card_8 fade background_control z-d3" id="popupOne">
    <div class="header">
      <h2 class="color-light-blue center">Title</h2>    
    </div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
         ultrices, dui quis tempor dictum, nisl velit fermentum justo, at 
         posuere quam nisl eget ex. Vestibulum vel ligula vulputate, 
         scelerisque libero non, laoreet lectus. Pellentesque eget auctor 
         lectus, vel pharetra odio. Quisque vitae turpis posuere, vehicula 
         lacus eu, viverra tortor. Nam a orci at tellus blandit auctor. Etiam 
         aliquam finibus fringilla. Nulla aliquet nisi eu enim vehicula 
         vulputate. Sed varius neque a libero elementum, vel posuere velit 
         feugiat. Quisque lobortis augue nulla. Vivamus eu mattis nisl. 
         Pellentesque tincidunt arcu enim, eget bibendum diam sollicitudin sit 
         amet. Cras``` fermentum tempor turpis id gravida. Fusce id elementum 
         velit. Curabitur eu tellus nibh.
    </p>
</div>
```

`Javascript

```HTML
    monomer.showDialog("#popupOne");
```

### Lists

```HTML
<ul class="list advanced divider">
    <li>
        <div>
            <div class="test_box fab z-d1">
                <img src="img/some.png">
            </div>
        </div>
        <div>
            <div>
                <h3>List Text</h3>
            </div>
            <span class="expand-config button-right icon-ellipsis-v icon-1x icon-black" target="#ctxMnu">
            </span>
        </div>
    </li>
    ...
    ...
</ul>
```

### Icons
### Colors
### Shadows

## STATE
1 - Under development.

## Contribute
* Please leave a comment if you want to contribute to this project.