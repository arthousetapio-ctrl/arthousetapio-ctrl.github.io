---
name: Veistotaide
tile_image: "/Images/gallery_images/sculpture1.jpg %}"
gallery_img1: "/Images/gallery_images/sculpture1.jpg"
img1_alt_text: scu222e imge1 tsafa333sf afsaf asf asf asf
layout: default
page_type: "gallery"


---


<div class="tile-container">

    {% for item in site.gallery_fi %}
    {% if item.page_type == "veistotaide_teos" %}
    <div class="tile-card">
        {% include gallery_tile_layout_teos_description.html %}
    </div>
     {% endif %}
    {% endfor %}
  </div>


<div class = "page-spacing">
<div class="main-page-text">



</div>
</div>

<div class = "page-spacing">

<img class="page-image2" alt="testtt ttt tt gg 33 " src="{% link /Images/gallery_images/sculpture2.jpg %}"/>
</div>
