# ui-flex

> A CSS Library with built in grid using display:flex


##Installation

```bash
bower install --save ui-flex
```

Include the following in the `<head>` of your `<html>`

```html
<link rel="stylesheet" href="bower_components/ui-flex/dist/ui-flex.css">
```


*NOTE* Inorder for the library to work properly, make sure your current CSS files are not modifying the min and max widths or min and max heights of any default HTML Element 
**EXAMPLE** body, main, div, header, footer, section, aside. 

If your css requires that you modify the defaults for HTML elements, then dont't use these elements when using the *flex-* classes


----------


##Usage

Immediately after the ```<body>``` tag create an element with the Flexer Class.
**DO NOT PLACE *.Flexer* ON THE BODY**
    *- It will not work. *

**Example**
```html
<html>
    <body>
        <div class="Flexer"></div>
    </body>
</html>
```

The *.Flexer* class creates a flex-column layout. 
within this class you can create the following elements

>flex-column: One collum contains many rows


*[.flex-header](#flex-header)* | ` flex-basis: $header-height `
*[.flex-body](#flex-body)*     | ` flex: 1 0 auto `
*[.flex-footer](#flex-footer)* | ` flex-basis: $footer-height `

```CSS
.flex-header,
.flex-body,
.flex-footer

    flex-direction : row
```





**Example**
```html
<div class="Flexer">
    <header class="flex-header"></header>
    <section class="flex-body"></section>
    <footer class="flex-footer"></footer>
</div>
```


>A row can have many columns or rows.

Inside the *.flex-body* you are given a flex row layout, so you can then specify elements that will be flexed within the current row. 

*[.flex-main](#Flex-main)* | ` flex-direction: column, order 0`

*[.flex-aside](#flex-aside)*,
*[.flex-aside-left](#flex-aside-left)* ` flex-basis $aside-width, order -1 `
*[.flex-aside-right](#flex-aside-right)* ` flex-basis $aside-width order 1`

Dont't worry about the positions of these elements in the Dom, 
If you use the ```.flex-aside-<right or left>```
the flex container will know how to properly position the elements. 

If you don't use the `-left` or `-right` you can use the `.order-*` class to specify the correct **order** for each element. 

Checkout the API for  *[.order-*](#order-)* for the *.order-* classes

You can also use Checkout the API for using the *[.flex-aside-*](#flex-aside)*

That said. . .  We can flex two asides for sidebars, and a main area for the center. 

**Example**
```html
<div class="Flexer">
    <header class="flex-header"></header>
    <section class="flex-body">
    <!-- Start Example -->
        <div class="flex-main"></div>
        <aside class="flex-aside-left"></aside>
        <aside class="flex-aside-right"></aside>
    <!-- End Example -->
    </section>
    <footer class="flex-footer"></footer>
</div>
```



----------


##Flex

The Flex Class is pretty straight forward. 
`.flex` by default , has the CSS property 
```CSS
flex: 1
```

` .flex` Will take up all the given room possible, Evenly distributing it's size to it's siblings.

**Example**
```html
<section clas="flex-row">
    <div class="flex"></div>
</section>
```

The inner div will be 100% tall and 100% wide


If we place two divs inside this *.flex-row*
They Will evenly take up all the available space
```html
<section class="flex-row">
    <div class="flex"></div>
    <div class="flex"></div>
</section>

```
Each inner div will now be 50% wide and 100% tall

**The width in this case is known as flex-basis**

This will work on up to as many inner elements possible. 

----------


##Flex-*

##.flex-{size}
>The `.flex-*` Grid can be used in the same way Bootstrap's Grid works.

**NOTE** There are **12** *Columns!*

```style
.flex-1
.flex-2
.flex-3
.flex-4
.flex-5
.flex-6
.flex-7
.flex-8
.flex-9
.flex-10
.flex-11
.flex-12
```

You can use `.flex-` like the following

**Example**
```html
<section class="flex-row">
    <div class="flex-3"></div>
    <div class="flex-6"></div>
    <div class="flex-3"></div>
</section>
```


##.flex-{media}-{size}
>The `.flex-{media}-*` Grid can be used in the same way [BootStrap's](http://getbootstrap.com) Media Queries work.


```
@media min-width: $breakpoint-xs
    .flex-xs-1

@media min-width: $breakpoint-sm
    .flex-sm-1

@media min-width: $breakpoint-md
    .flex-md-1

@media min-width: $breakpoint-lg
    .flex-lg-1

@media min-width: $breakpoint-xl
    .flex-lx-1
```

You can use `.flex-{media}-*` like the following

**Example**
```html
<section class="flex-row">
    <div class="flex-xs-2"></div>
    <div class="flex-sm-2"></div>
    <div class="flex-md-2"></div>
    <div class="flex-lg-2"></div>
    <div class="flex-xl-4"></div>
</section>
```


##.flex-{offset} - - {size}
>Similar to [BootStrap's](http://getbootstrap.com) offset classes, Except this is one Class.

```
.flex-3--6
```

This will be half the size, and in the center... The first number is the offset size, and the second is the actual size of the element.

```
.flex-1--1
.flex-2--1
.flex-3--1
.flex-4--1
.flex-5--1
.flex-6--1
.flex-7--1
.flex-8--1
.flex-9--1
.flex-10--1
.flex-11--1
```

You can use `.flex-{offset}--{size}` like the following in order to center an element that is half the full width. 

**Example**
```html
<section class="flex-row">
    <div class="flex-3--6"></div>
</section>
```


##.flex-{media}-{offset} - - {size}
>Similar to [BootStrap's](http://getbootstrap.com) offset media classes, Except this is one Class.

```
@media min-width: $breakpoint-xs
    .flex-xs-1--1

@media min-width: $breakpoint-sm
    .flex-sm-2--1

@media min-width: $breakpoint-md
    .flex-md-3--1

@media min-width: $breakpoint-lg
    .flex-lg-4--1

@media min-width: $breakpoint-xl
    .flex-xl-5--1
```

You can use `.flex-{media}-{offset}--{size}` like the following in order to center an element that is half the full width, even on a mobile screen

**Example**
```html
<section class="flex-row">
    <div class="flex-xs-3--6"></div>
</section>
```


----------


##.flex-header
```
    flex 0 0 $header-height
    flex-direction: row
    display: flex
    order -1
```


----------


##.flex-body
```
    flex: 1 0 auto
    flex-direction: row
    display:flex
    order 0
```


----------


##.flex-footer
```
    flex: 0 0 $footer-height
    flex-direction: row
    display:flex
    order 1
```


----------


##bg-colors

In order to visualize these elements you can add *.bg-* classes to them for background colors. 

```html
<div class="flex-body bg-red"></div>
<div class="flex-body bg-pink"></div>
<div class="flex-body bg-purple"></div>
<div class="flex-body bg-deeppurple"></div>
<div class="flex-body bg-indigo"></div>
<div class="flex-body bg-blue"></div>
<div class="flex-body bg-lightblue"></div>
<div class="flex-body bg-cyan"></div>
<div class="flex-body bg-teal"></div>
<div class="flex-body bg-green"></div>
<div class="flex-body bg-lightgreen"></div>
<div class="flex-body bg-lime"></div>
<div class="flex-body bg-yellow"></div>
<div class="flex-body bg-amber"></div>
<div class="flex-body bg-orange"></div>
<div class="flex-body bg-deeporange"></div>
<div class="flex-body bg-brown"></div>
<div class="flex-body bg-grey"></div>
<div class="flex-body bg-bluegrey"></div>
```

**Note**
You can append the following numbers to any of these given classes
```
100,200,300,400,500,600,700,800,900
or
A100,A200,A400,A700
```

**For Example**
```html
<div class="bg-green"></div>
or 
<div class="bg-green-300"></div>
```

You can find the resource for these colors in the 
[Goolge Material Design Palette](http://www.google.com/design/spec/style/color.html#color-color-palette)





