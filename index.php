<?php include_once "head.php" ?>

<body class="home">
<div class="layout">

   <?php include_once "header.php" ?>

   <div class="promo-slider">
      <ul class="owl-carousel slider-wrap">
         <li class="slider-item">
            <div class="slider-item-wrap">
               <div class="slider-img"><img src="pic/promo-slider/slide1.png" alt="title" data-navpic="pic/promo-slider/slide1.png"></div>
               <div class="slider-info">
                  <h2 class="slider-title">Запчасти и аксессуары</h2>
               </div>
            </div>
         </li>
         <li class="slider-item">
            <div class="slider-item-wrap">
               <div class="slider-img"><img src="pic/promo-slider/slide1.png" alt="title" data-navpic="pic/promo-slider/slide1.png"></div>
               <div class="slider-info">
                  <h2 class="slider-title">Запчасти и аксессуары для автомобилей skoda</h2>
               </div>
            </div>
         </li>
      </ul>
      <div class="slider-nav">
         <div class="nav-prev"><div class="bg-img cover-img"></div><svg class="chevron-i"><use xlink:href="#chevron-i"></use></svg></div>
         <div class="nav-next"><div class="bg-img cover-img"><svg class="chevron-i"><use xlink:href="#chevron-i"></use></svg></div></div>
      </div>
   </div>

   <?php include_once "catalog_filter.php" ?>

   <main class="main">
      <div class="container">
        
         <!-- aside left -->
         <?php include_once "aside-left.php" ?>
         
         <div class="content-b">
            <article class="content-inner">
               <p><a href="#b1" class="banner"><img src="pic/banner/banner1.jpg" alt="banner1"></a></p>
               <p><a href="#b2" class="banner"><img src="pic/banner/banner2.jpg" alt="banner2"></a></p>
               <p><a href="#b3" class="banner"><img src="pic/banner/banner3.jpg" alt="banner3"></a></p>
               <p>Разнообразный и богатый опыт рамки и место обучения кадров требуют от нас анализа направлений прогрессивного развития. Повседневная практика показывает, что рамки и место обучения кадров способствует подготовки и реализации существенных финансовых и административных условий.</p>
               <h2>Каталог автозапчастей VAG</h2>
               <ul>
                  <li style="margin-bottom: 1.2em;"><a href="">Запчасти Audi</a> (от А1 до Q7);</li>
                  <li style="margin-bottom: 1.2em;"><a href="">Запчасти Skoda</a> (Superb, Octavia, Rapid, Yeti, Fabia);</li>
                  <li style="margin-bottom: 1.2em;"><a href="">Запчасти Volkswagen</a> (Polo, Passat, Tiguan и др.);</li>
               </ul>
            </article>
            <div class="module-b advantage-b">
               <div class="section-header"><span class="section-header-in">Преимущества компании</span></div>
               <div class="advantage-b-wrap">
                  <div class="adv-head">
                     <div class="adv-item adv-delivery">
                        <div class="adv-item-img"><svg class="truck-i"><use xlink:href="#truck-i"></use></svg></div>
                        <span>Доставка за 1 день<br>со склада в Санкт-петербурге</span>
                     </div>
                     <div class="adv-item adv-spares">
                        <div class="adv-item-img"><svg class="brakes-i"><use xlink:href="#brakes-i"></use></svg></div>
                        <span>Редкие запчасти<br>под заказ</span>
                     </div>
                     <div class="adv-item adv-help">
                        <div class="adv-item-img"><svg class="carlenz-i"><use xlink:href="#carlenz-i"></use></svg></div>
                        <span>Помощь в подборе<br>запчастей</span>
                     </div>
                  </div>
                  <div class="adv-footer">
                     <div class="adv-item adv-warranty">
                        <div class="adv-item-img"><svg class="shield-i"><use xlink:href="#shield-i"></use></svg></div>
                        <span>Гарантия на запчасти 5 лет</span>
                     </div>
                     <div class="adv-item adv-pickup">
                        <div class="adv-item-img"><svg class="baggage-i"><use xlink:href="#baggage-i"></use></svg></div>
                        <span>Возможность<br>самовывоза 7 дней<br>в неделю</span>
                     </div>
                     <div class="adv-item adv-payment">
                        <div class="adv-item-img"><svg class="screen-i"><use xlink:href="#screen-i"></use></svg></div>
                        <span>Онлайн-оплата<br>прямо на сайте</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
       
         <!-- aside right -->
         <?php include_once "aside-right.php" ?>

      </div> 
   </main>
   <?php include "footer.php" ?>