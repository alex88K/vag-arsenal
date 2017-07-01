<section class="catalog">
   <div class="container-fluid">
      <div class="section-header">Выберите каталог для подбора</div>
      <ul class="catalog-list">
         <li class="catalog-item"><a href="/category1" class="catalog-item-link">
            <img src="pic/car-logos/audi.png" class="catalog-item-logo" width="190px" height="120px" alt="Audi">
            <span class="catalog-item-bottom btn">подбор по каталогу <svg class="angle-d-right-i"><use xlink:href="#angle-d-right-i"></use></svg></span></a>
            <div class="bg-img cover-img" style="background-image: url(../i/catalog-bg/c1.jpg);"></div>
         </li>
         <li class="catalog-item"><a href="/category1" class="catalog-item-link">
            <img src="pic/car-logos/volkswagen.png" class="catalog-item-logo" width="125px" height="125px" alt="volkswagen">
            <span class="catalog-item-bottom btn">подбор по каталогу <svg class="angle-d-right-i"><use xlink:href="#angle-d-right-i"></use></svg></span></a>
            <div class="bg-img cover-img" style="background-image: url(../i/catalog-bg/c2.jpg);"></div>
         </li>
         <li class="catalog-item"><a href="/category1" class="catalog-item-link">
            <img src="pic/car-logos/skoda.png" class="catalog-item-logo" width="124px" height="124px" alt="skoda">
            <span class="catalog-item-bottom btn">подбор по каталогу <svg class="angle-d-right-i"><use xlink:href="#angle-d-right-i"></use></svg></span></a>
            <div class="bg-img cover-img" style="background-image: url(../i/catalog-bg/c3.jpg);"></div>
         </li>
      </ul>
   </div>
</section>

<section class="catalog-filter">
   <div class="container">
      <form action="#" class="catalog-filter-form">
         <div class="field">
            <label for="filter-brand">Марка</label>
            <select name="brand" id="filter-brand" class="catalog-filter-select">
               <option value="skoda">Skoda</option>
               <option value="volkswagen">Volkswagen</option>
               <option value="volkswagen-commercial">Volkswagen Commercial</option>
            </select>
         </div>
         <div class="field">
            <label for="filter-model">Модель</label>
            <select name="model" id="filter-model" class="catalog-filter-select">
               <option value="skoda-octavia">Skoda Octavia</option>
               <option value="skoda-superb">Skoda SuperB</option>
               <option value="skoda-rapid">Skoda Rapid</option>
            </select>
         </div>
         <div class="field">
            <label for="filter-year_v">Год выпуска</label>
            <select name="year_v" id="filter-year_v" class="catalog-filter-select">
               <option value="2000">2000</option>
               <option value="2001">2001</option>
               <option value="2002">2002</option>
               <option value="2003">2003</option>
               <option value="2004">2004</option>
            </select>
         </div>
         <div class="field">
            <label for="filter-brand">Категория товара</label>
            <select name="items_category" id="filter-items_category" class="catalog-filter-select">
               <option value="1">Подшипники</option>
               <option value="2">Инструменты</option>
               <option value="3">Покрышки</option>
            </select>
         </div>
         <button type="submit" class="btn search-btn"><svg class="search-i"><use xlink:href="#search-i"></use></svg></button>
      </form>
   </div>
</section>