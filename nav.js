<script>
            const backtotop = document.querySelector("#backtotop");
            backtotop.addEventListener("click",function(){
                window.scrollTo({
                    top:0,
                    left:0,
                    behavior:"smooth"
                });
            });
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script> 
            $(document).ready(function(){
                $("#flip").click(function(){
                    $("#list").slideToggle("slow");
                });
            });
        </script>
        <script>
            JQuery(document).ready(function($){
                $(".fancybox").on("click", function(){
                    $.fancybox({
                        href: this.href,
                        type: $(this).data("type")
                    }); // fancybox
                    return false
                }); // on
            }); // ready
        </script>
        <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="jquery.fancybox.min.js"></script>
        <script>
            $(function(){
                $("#nav-placeholder").load("nav.html");
            });
        </script>
        