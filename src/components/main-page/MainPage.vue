<template>
<div>
<div class="row intro-copy-wrap">
   <div class="small-12 columns">
      <p>Front End Authority promotes the ongoing education of front end technologies.</p>
      <p>Part digital, part physical, we aim to bring like-minded pros and learners together to share knowledge, make connections, have some beers, and stay up to date on the constantly changing world of Front End Web Development.</p>
      <p class="text-center headline">By elevating our community<br>we can push the web forward</p>
   </div>
</div>
<div class="hero-content">
   <div class="row">
      <div class="small-12 text-center">
         <p><span class="headline">Join us at our next session:</span></p>
         <ul class="meetup-list">
            <li>
              <strong>
                <a href="https://www.meetup.com/frontendauthority/events/239760351/">Online VueJS Workshop and Sync</a>
              </strong>
              <br>
              When: <a href="https://www.google.com/calendar/render?action=TEMPLATE&amp;text=Front+End+Authority+Meetup&amp;dates=20170628T260000Z/20170628T280000Z&amp;details=Monthly+Front+End+Authority+Meetup,+Visit+the+Meetup+page+for+more+details:+http://www.meetup.com/frontendauthority&amp;location=2790+Gateway+Road,+Carlsbad,+CA+92009&amp;sf=true&amp;output=xml" target="_blank">6/28 @7p PST</a>
              <br>
              <!--Where: <a href="https://www.google.com/maps/place/2790+Gateway+Rd,+Carlsbad,+CA+92009/@33.128456,-117.246922,17z/data=!4m7!1m4!3m3!1s0x80dc74bf20ebfbf9:0x692a343a8ecce621!2s2788+Gateway+Rd,+Carlsbad,+CA+92009!3b1!3m1!1s0x80dc74bf20ebfbf9:0x692a343a8ecce621">Planning Center, Carlsbad, CA</a>-->
              Where: Online (link coming soon)
              <br><br><a href="http://www.meetup.com/frontendauthority/events/239760351/" hrea="_blank" class="button small">RSVP</a></li>
         </ul>
      </div>
   </div>
   <div class="row">
      <div class="small-12 large-6 columns text-center cta-col">
         <p><span class="headline">See what we're up to:</span></p>
         <p>
          <a href="http://github.com/frontendauth" target="_blank"><i class="fa fa-3x fa-github"></i>
          <a href="http://twitter.com/frontendauth" target="_blank"><i class="fa fa-3x fa-twitter"></i></a>
          <br>
          <a href="http://www.meetup.com/frontendauthority"><img :src="'/static/img/meetup.png'" class="meetup-icon"></a></a>
         </p>
         <br>
         <p>
          <span class="headline">Join us on <a href="http://fea-slack-invite.herokuapp.com" target="_blank">Slack!</a></span>
          <br>
          Join our online community by sharing what you're learning, asking questions, and contributing to our group projects: <a href="https://frontendauthority.slack.com" target="_blank">frontendauthority.slack.com</a>
         </p>
         <p>
          Invite yourself to our group by entering your email on <a href="http://fea-slack-invite.herokuapp.com/" target="_blank">this invite form</a>
         </p>
      </div>
      <div class="small-12 large-6 columns text-center cta-col">
         <p class="headline">Stay up to date:</p>
         <p>Join our mailing list to stay in the loop about our events and the chance to win awesome deals for tools and conferences:</p>
         <!-- Begin MailChimp Signup Form -->
         <div id="mc_embed_signup">
            <form action="http://frontendauthority.us9.list-manage.com/subscribe/post?u=a35787671cf26672af8f802fc&amp;id=640e77f52b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
               <div id="mc_embed_signup_scroll">
                  <div class="mc-field-group">
                     <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span> </label>
                     <input type="email" placeholder="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                  </div>
                  <div class="mc-field-group">
                     <label for="mce-FNAME">First Name </label>
                     <input type="text" placeholder="first name" value="" name="FNAME" class="" id="mce-FNAME">
                  </div>
                  <div class="mc-field-group">
                     <label for="mce-LNAME">Last Name </label>
                     <input type="text" placeholder="last name" value="" name="LNAME" class="" id="mce-LNAME">
                  </div>
                  <div id="mce-responses" class="clear">
                     <div class="response" id="mce-error-response" style="display:none"></div>
                     <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a35787671cf26672af8f802fc_640e77f52b" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
               </div>
            </form>
         </div>
         <!--End mc_embed_signup-->
      </div>
   </div>
</div>
<div class="row">
   <div class="small-12 columns text-center">
      <p>Who should come?<br>You!</p>
   </div>
   <div class="small-12 columns">
      <p>Everyone is welcome to our events. We are made up of people at all skill levels and focuses.</p>
      <p>Just bring your awsome self (beer is always welcome too).</p>
   </div>
</div>
<div class="row">
   <div class="small-12 columns text-center">
      <p>Check out our past sessions:</p>
      <br><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLifFLDrLr4xpOBMezIw21KXGNLfrBpPjC" frameborder="0" allowfullscreen></iframe>
   </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
