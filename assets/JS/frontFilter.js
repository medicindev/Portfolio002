
//  !(function($) {
//  // Porfolio isotope and filter
//   $(window).on('load', function() {
//     var portfolioIsotope = $('.main-project-div').isotope({
//         itemSelector: '.main-project-div-inner',
//         layoutMode: 'fitRows'
//     });
//     console.log(portfolioIsotope);

//     $('#portfolio-flters li').on('click', function() {
//       $("#portfolio-flters li").removeClass('filter-active');
//       $(this).addClass('filter-active');
//       console.log("dfsdfsdfs")

//       portfolioIsotope.isotope({
//         filter: $(this).data('filter')
//       });
//     });

//   });

//   // Initiate venobox (lightbox feature used in portofilo)
//   $(document).ready(function() {
//     $('.venobox').venobox();
//   });

// })(jQuery);

var handle = document.getElementsByTagName("li");
var project = document.getElementsByClassName("main-project-div-inner");
var projectContainer = document.getElementsByClassName("main-project-div")[0]

for (var i = 0; i < handle.length; i++) {
    
    handle[i].onclick = (e) => {
        if (e.target.innerHTML === "All") {
            
            location.reload();
        } else if (e.target.innerHTML === "WordPress") {
          
            var projectHTML = []; // Reset array
            for (let j = 0; j < project.length; j++) {  // Use 'let' instead of 'var'
                if (project[j].getAttribute("data-set") == "wordpress") {
                   
                    projectHTML.push(project[j]);
                }
            }
            projectContainer.innerHTML = "";
            projectHTML.forEach((item) => {
                projectContainer.appendChild(item.cloneNode(true)); // Append filtered items
            });
        }
        else if(e.target.innerHTML === "Vue"){     
           
            var projectHTML = []; // Reset array
            for (let j = 0; j < project.length; j++) {  // Use 'let' instead of 'var'
                if (project[j].getAttribute("data-set") == "Vue") {                    
                    projectHTML.push(project[j]);
                }
            }
            
            projectContainer.innerHTML = "";
            projectHTML.forEach((item) => {
                projectContainer.appendChild(item.cloneNode(true)); // Append filtered items
            });
        }
        else if(e.target.innerHTML === "React"){
            
            var projectHTML = []; // Reset array
            for (let j = 0; j < project.length; j++) {  // Use 'let' instead of 'var'
                if (project[j].getAttribute("data-set") == "React") {
                    
                    projectHTML.push(project[j]);
                }
            }
            projectContainer.innerHTML = "";
            projectHTML.forEach((item) => {
                projectContainer.appendChild(item.cloneNode(true)); // Append filtered items
            });
        }
        else if(e.target.innerHTML === "Shopify"){
          
            var projectHTML = []; // Reset array
            for (let j = 0; j < project.length; j++) {  // Use 'let' instead of 'var'
                if (project[j].getAttribute("data-set") == "Shopify") {                    
                    projectHTML.push(project[j]);
                }
            }
            projectContainer.innerHTML = "";
            projectHTML.forEach((item) => {
                projectContainer.appendChild(item.cloneNode(true)); // Append filtered items
            });
        }
    }
}



