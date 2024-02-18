     var markAllButton = document.querySelector('.btn');

    // Get all elements with class name 'notifications1'
    var notifications = document.querySelectorAll('.notifications1');

    // Get the notification box element
    var notificationBox = document.querySelector('.notification-box');

    // Set the initial count of notifications
    var notificationCount = notifications.length;

    // Update the content of the notification box
    notificationBox.textContent = notificationCount;

    // Object to track whether each notification has been clicked
    var clickedNotifications = {};

    // Add click event listener to each notification element
    notifications.forEach(function(notification, index) {
        notification.addEventListener('click', function() {
            // Check if the notification has been clicked already
            if (!clickedNotifications[index]) {
               
                // Add white background
                notification.classList.add('hide-notifications1');

                // Remove red dot
                var dot = notification.querySelector('.dot');
                if (dot) {
                    dot.classList.add('hide-dot');
                }

                // Update the count of notifications if it's greater than zero
                if (notificationCount > 0) {
                    notificationCount--;

                    // Update the content of the notification box
                    notificationBox.textContent = notificationCount;

                    // Mark the notification as clicked
                    clickedNotifications[index] = true;
                }
            }
        });
    // Add click event listener to the button
    markAllButton.addEventListener('click', function() {
		    notifications.forEach(function(notification) {
            // Remove blue background
            notification.classList.add('hide-notifications1');

            // Remove red dot
            var dot = notification.querySelector('.dot');
    
                dot.classList.add('hide-dot');
           
        });
        // Reset the count of notifications to zero
        notificationCount = 0;

        // Update the content of the notification box
        notificationBox.textContent = notificationCount;
		 clickedNotifications = {};
    });
});


const show=document.querySelector(".sub1");

show.addEventListener("click",function(){
     const mssg=document.querySelector(".mssg")
	 mssg.classList.toggle("show-mssg");
});
