
    // Create floating blood drops with enhanced animations
    function createFloatingDrops() {
      const container = document.getElementById('bloodBackground');
      // Clear existing drops
      container.innerHTML = '';
      // Create 20 floating drops
      for (let i = 0; i < 20; i++) {
        const drop = document.createElement('div');
        drop.className = 'floating-drop';
        // Random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        drop.style.left = `${left}vw`;
        drop.style.top = `${top}vh`;
        // Random size
        const size = 16 + Math.random() * 16;
        drop.style.width = `${size}px`;
        drop.style.height = `${size * 1.5}px`;
        // Random animation duration and delay
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * 5;
        drop.style.animationDuration = `${duration}s, 3s`;
        drop.style.animationDelay = `${delay}s, ${delay + 1}s`;
        // Random opacity
        drop.style.opacity = 0.3 + Math.random() * 0.5;
        container.appendChild(drop);
      }
    }
    // Initialize floating drops
    createFloatingDrops();
    // Recreate drops periodically for continuous animation
    setInterval(createFloatingDrops, 15000);
    // Tab Navigation with enhanced animations
    document.querySelectorAll('nav a').forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active class from all tabs
        document.querySelectorAll('nav a').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        // Show corresponding content with animation
        const tabId = this.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');
        // Scroll to top of content
        window.scrollTo({
          top: document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      });
    });
    // Language Toggle with animation
    const languageToggle = document.getElementById('languageToggle');
    let isTelugu = false;
    languageToggle.addEventListener('click', function() {
      isTelugu = !isTelugu;
      // Animate the button
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        this.textContent = isTelugu ? 'తెలుగు / English' : 'English / తెలుగు';
      }, 150);
      // In a real application, this would change all text content
      // For demo, we'll just change the header
      const logo = document.querySelector('.logo');
      logo.innerHTML = isTelugu ? 
        '<span class="logo-icon"></span><span>రక్త<span class="gradient-text">దానం</span></span>' : 
        '<span class="logo-icon"></span><span>Blood<span class="gradient-text">Donation</span></span>';
    });
    // Donor Form Toggle with animation
    const showDonorFormBtn = document.getElementById('showDonorForm');
    const donorFormCard = document.getElementById('donorRegistrationCard');
    const cancelDonorFormBtn = document.getElementById('cancelDonorForm');
    const cancelDonorFormBtn2 = document.getElementById('cancelDonorForm2');
    
    showDonorFormBtn.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        donorFormCard.style.display = 'block';
        // Scroll to form
        donorFormCard.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    });
    
    cancelDonorFormBtn.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        donorFormCard.style.display = 'none';
      }, 150);
    });
    
    cancelDonorFormBtn2.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        donorFormCard.style.display = 'none';
      }, 150);
    });
    // Availability Toggle with animation
    const availabilityToggle = document.getElementById('availabilityToggle');
    const availabilityStatus = document.getElementById('availabilityStatus');
    availabilityToggle.addEventListener('change', function() {
      // Animate the toggle
      this.parentElement.style.transform = 'scale(1.05)';
      setTimeout(() => {
        this.parentElement.style.transform = 'scale(1)';
        availabilityStatus.textContent = this.checked ? 'Available' : 'Unavailable';
        availabilityStatus.style.color = this.checked ? '#10b981' : '#ef4444';
      }, 150);
    });
    // District to Mandal Autocomplete (simplified for demo)
    const districtSelect = document.getElementById('districtSelect');
    const mandalInput = document.getElementById('mandalInput');
    districtSelect.addEventListener('change', function() {
      // Animate the select
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        // In a real app, this would fetch mandals based on selected district
        // For demo, we'll just show a message
        if (this.value) {
          mandalInput.placeholder = `Enter mandal in ${this.value}`;
          mandalInput.focus();
        } else {
          mandalInput.placeholder = 'Enter mandal';
        }
      }, 150);
    });
    // Form Submissions with animation
    document.getElementById('donorForm')?.addEventListener('submit', function(e) {
      e.preventDefault();
      // Animate success message
      const successMessage = document.createElement('div');
      successMessage.className = 'notification success';
      successMessage.innerHTML = `
        <div class="notification-icon">🎉</div>
        <div>
          <strong>Success!</strong> Donor registered successfully. Thank you for joining our life-saving mission!
        </div>
      `;
      this.parentNode.insertBefore(successMessage, this);
      // Hide form and show button after delay
      setTimeout(() => {
        this.style.display = 'none';
        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.style.opacity = '0';
          setTimeout(() => {
            successMessage.remove();
          }, 500);
        }, 5000);
      }, 1000);
    });
    document.getElementById('emergencyForm')?.addEventListener('submit', function(e) {
      e.preventDefault();
      // Animate success message
      const successMessage = document.createElement('div');
      successMessage.className = 'notification warning';
      successMessage.innerHTML = `
        <div class="notification-icon">⏳</div>
        <div>
          <strong>Request Submitted!</strong> Your emergency request is pending doctor approval. We'll notify you once approved.
        </div>
      `;
      this.parentNode.insertBefore(successMessage, this);
      // Hide form and show button after delay
      setTimeout(() => {
        this.style.display = 'none';
        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.style.opacity = '0';
          setTimeout(() => {
            successMessage.remove();
          }, 500);
        }, 5000);
      }, 1000);
    });
    // Mock data for demo purposes
    const mockData = {
      donors: [
        { name: 'Sai Kumar', district: 'Visakhapatnam', mandal: 'Gajuwaka', bloodGroup: 'O+', donations: 28, badge: 'hero', status: 'available', phone: '9876543210' },
        { name: 'Priya Reddy', district: 'Guntur', mandal: 'Tenali', bloodGroup: 'A+', donations: 17, badge: 'gold', status: 'available', phone: '9876543211' },
        { name: 'Venkatesh', district: 'Krishna', mandal: 'Machilipatnam', bloodGroup: 'B+', donations: 12, badge: 'gold', status: 'unavailable', phone: '9876543212' },
        { name: 'Lakshmi', district: 'East Godavari', mandal: 'Kakinada', bloodGroup: 'AB-', donations: 9, badge: 'silver', status: 'available', phone: '9876543213' },
        { name: 'Raju Naidu', district: 'Anantapur', mandal: 'Dharmavaram', bloodGroup: 'O-', donations: 6, badge: 'silver', status: 'unavailable', phone: '9876543214' },
        { name: 'Suresh Babu', district: 'Visakhapatnam', mandal: 'Madhurawada', bloodGroup: 'O+', donations: 15, badge: 'gold', status: 'available', phone: '9876543215' },
        { name: 'Anitha Devi', district: 'Guntur', mandal: 'Guntur City', bloodGroup: 'B+', donations: 8, badge: 'silver', status: 'available', phone: '9876543216' },
        { name: 'Ravi Teja', district: 'Krishna', mandal: 'Vijayawada', bloodGroup: 'A-', donations: 22, badge: 'gold', status: 'available', phone: '9876543217' },
        { name: 'Divya', district: 'East Godavari', mandal: 'Rajahmundry', bloodGroup: 'O+', donations: 5, badge: 'bronze', status: 'available', phone: '9876543218' },
        { name: 'Kiran Kumar', district: 'Anantapur', mandal: 'Anantapur City', bloodGroup: 'AB+', donations: 18, badge: 'gold', status: 'unavailable', phone: '9876543219' }
      ],
      emergencies: [
        { id: 'EMG-2023-001', patient: 'Rahul Sharma', bloodGroup: 'O+', urgency: 'critical', hospital: 'KIMS Hospital', location: 'Visakhapatnam', timeLeft: '1h 23m', status: 'matching' },
        { id: 'EMG-2023-002', patient: 'Geetha Devi', bloodGroup: 'A-', urgency: 'urgent', hospital: 'Apollo Hospital', location: 'Guntur', timeLeft: '18h 45m', status: 'assigned' },
        { id: 'EMG-2023-003', patient: 'Kiran Kumar', bloodGroup: 'B+', urgency: 'critical', hospital: 'Care Hospital', location: 'Vijayawada', timeLeft: '0h 58m', status: 'no-response' },
        { id: 'EMG-2023-004', patient: 'Sita Rani', bloodGroup: 'AB+', urgency: 'urgent', hospital: 'Government Hospital', location: 'Tirupati', timeLeft: '22h 12m', status: 'completed' }
      ],
      districts: [
        "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", 
        "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", 
        "Vizianagaram", "West Godavari", "YSR Kadapa"
      ],
      mandals: {
        "Anantapur": ["Anantapur", "Dharmavaram", "Guntakal", "Kadiri", "Rayadurg"],
        "Chittoor": ["Chittoor", "Tirupati", "Rajampet", "Punganur", "Palamaner"],
        "East Godavari": ["Kakinada", "Rajahmundry", "Amalapuram", "Ramachandrapuram", "Mandapeta"],
        "Guntur": ["Guntur", "Tenali", "Narasaraopet", "Bapatla", "Piduguralla"],
        "Krishna": ["Vijayawada", "Machilipatnam", "Nuzvid", "Gudivada", "Jaggayyapeta"],
        "Kurnool": ["Kurnool", "Adoni", "Yemmiganur", "Pattikonda", "Nandyal"],
        "Nellore": ["Nellore", "Kavali", "Kandukur", "Gudur", "Atmakur"],
        "Prakasam": ["Ongole", "Markapur", "Kanigiri", "Chirala", "Addanki"],
        "Srikakulam": ["Srikakulam", "Palasa", "Tekkali", "Amudalavalasa", "Ichchapuram"],
        "Visakhapatnam": ["Visakhapatnam", "Anakapalli", "Bheemunipatnam", "Gajuwaka", "Madhurawada"],
        "Vizianagaram": ["Vizianagaram", "Bobbili", "Parvathipuram", "Cheepurupalli", "Gajapathinagaram"],
        "West Godavari": ["Eluru", "Bhimavaram", "Tadepalligudem", "Narasapuram", "Tanuku"],
        "YSR Kadapa": ["Kadapa", "Proddatur", "Jammalamadugu", "Pulivendula", "Badvel"]
      }
    };
    // NEW: Find Donors Form Toggle
    const showFindDonorsBtn = document.getElementById('showFindDonorsForm');
    const findDonorsForm = document.getElementById('findDonorsForm');
    const searchResultsCard = document.getElementById('searchResults');
    
    showFindDonorsBtn.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        findDonorsForm.style.display = 'block';
        searchResultsCard.style.display = 'none';
        // Scroll to form
        findDonorsForm.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    });
    // NEW: Autocomplete functionality for district input
    const searchDistrictInput = document.getElementById('searchDistrict');
    const districtDropdown = document.getElementById('districtDropdown');
    const searchMandalInput = document.getElementById('searchMandal');
    const mandalDropdown = document.getElementById('mandalDropdown');
    let selectedDistrict = '';
    searchDistrictInput.addEventListener('input', function() {
      const value = this.value.toLowerCase();
      if (value.length > 0) {
        const filteredDistricts = mockData.districts.filter(district => 
          district.toLowerCase().includes(value)
        );
        showAutocomplete(districtDropdown, filteredDistricts, searchDistrictInput);
      } else {
        districtDropdown.style.display = 'none';
      }
    });
    searchDistrictInput.addEventListener('focus', function() {
      if (this.value.length > 0) {
        const filteredDistricts = mockData.districts.filter(district => 
          district.toLowerCase().includes(this.value.toLowerCase())
        );
        showAutocomplete(districtDropdown, filteredDistricts, searchDistrictInput);
      }
    });
    // NEW: Autocomplete functionality for mandal input
    searchMandalInput.addEventListener('input', function() {
      if (selectedDistrict && this.value.length > 0) {
        const mandals = mockData.mandals[selectedDistrict] || [];
        const filteredMandals = mandals.filter(mandal => 
          mandal.toLowerCase().includes(this.value.toLowerCase())
        );
        showAutocomplete(mandalDropdown, filteredMandals, searchMandalInput);
      } else if (this.value.length === 0) {
        mandalDropdown.style.display = 'none';
      }
    });
    searchMandalInput.addEventListener('focus', function() {
      if (selectedDistrict && this.value.length > 0) {
        const mandals = mockData.mandals[selectedDistrict] || [];
        const filteredMandals = mandals.filter(mandal => 
          mandal.toLowerCase().includes(this.value.toLowerCase())
        );
        showAutocomplete(mandalDropdown, filteredMandals, searchMandalInput);
      }
    });
    function showAutocomplete(dropdown, items, inputField) {
      if (items.length === 0) {
        dropdown.style.display = 'none';
        return;
      }
      dropdown.innerHTML = '';
      items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'autocomplete-item';
        div.textContent = item;
        div.addEventListener('click', function() {
          inputField.value = item;
          dropdown.style.display = 'none';
          if (inputField === searchDistrictInput) {
            selectedDistrict = item;
            searchMandalInput.placeholder = `Enter mandal in ${item}`;
          }
        });
        dropdown.appendChild(div);
      });
      dropdown.style.display = 'block';
    }
    // Hide dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.form-group')) {
        districtDropdown.style.display = 'none';
        mandalDropdown.style.display = 'none';
      }
    });
    // NEW: Search Donors Form Submission
    document.getElementById('searchDonorsForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const bloodGroup = document.getElementById('searchBloodGroup').value;
      const district = searchDistrictInput.value;
      const mandal = searchMandalInput.value;
      // Filter donors based on search criteria
      let filteredDonors = mockData.donors.filter(donor => {
        let match = true;
        if (bloodGroup && donor.bloodGroup !== bloodGroup) match = false;
        if (district && donor.district !== district) match = false;
        if (mandal && donor.mandal !== mandal) match = false;
        if (donor.status !== 'available') match = false; // Only show available donors
        return match;
      });
      // Display results
      const resultsBody = document.getElementById('searchResultsBody');
      const resultsCount = document.getElementById('resultsCount');
      resultsBody.innerHTML = '';
      if (filteredDonors.length > 0) {
        filteredDonors.forEach(donor => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${donor.name}</td>
            <td>${donor.bloodGroup}</td>
            <td>${donor.district}</td>
            <td>${donor.mandal}</td>
            <td>${donor.phone}</td>
            <td><span class="badge badge-success">Available</span></td>
            <td><button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Contact</button></td>
          `;
          resultsBody.appendChild(row);
        });
        resultsCount.textContent = `${filteredDonors.length} Donors Found`;
      } else {
        resultsBody.innerHTML = `
          <tr>
            <td colspan="7" style="text-align: center; padding: 2rem; font-style: italic; color: var(--gray);">
              No available donors found matching your criteria. Try adjusting your search parameters.
            </td>
          </tr>
        `;
        resultsCount.textContent = '0 Donors Found';
      }
      searchResultsCard.style.display = 'block';
      searchResultsCard.style.opacity = '0';
      searchResultsCard.style.transform = 'translateY(20px)';
      setTimeout(() => {
        searchResultsCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        searchResultsCard.style.opacity = '1';
        searchResultsCard.style.transform = 'translateY(0)';
      }, 100);
      // Scroll to results
      searchResultsCard.scrollIntoView({ behavior: 'smooth' });
    });
    // Enhanced location tracking simulation
    function simulateLocationUpdates() {
      const locationElements = document.querySelectorAll('.badge-success');
      let counter = 0;
      setInterval(() => {
        locationElements.forEach((el, index) => {
          if (counter % (index + 2) === 0) {
            // Add pulse animation
            el.style.transform = 'scale(1.1)';
            el.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.5)';
            setTimeout(() => {
              el.style.transform = 'scale(1)';
              el.style.boxShadow = 'none';
            }, 500);
          }
        });
        counter++;
      }, 5000);
    }
    simulateLocationUpdates();
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.transform = 'scale(1)';
      } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.transform = 'scale(0.8)';
      }
    });
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    // Chart animations
    function animateCharts() {
      const chartBars = document.querySelectorAll('.chart-bar');
      chartBars.forEach((bar, index) => {
        // Reset animation
        bar.style.animation = 'none';
        void bar.offsetWidth; // Trigger reflow
        bar.style.animation = `growBar 1.5s ease-out ${index * 0.1}s forwards`;
      });
    }
    // Animate charts when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCharts();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.chart-container').forEach(chart => {
      observer.observe(chart);
    });
    // Enhanced accessibility features
    document.querySelectorAll('nav a').forEach((tab, index) => {
      tab.setAttribute('tabindex', '0');
      tab.setAttribute('role', 'tab');
      // Add keyboard support
      tab.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
    // Announce tab changes for screen readers
    const tabObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.classList.contains('active')) {
            const tabName = target.getAttribute('data-tab');
            const announcement = document.createElement('div');
            announcement.className = 'sr-only';
            announcement.setAttribute('aria-live', 'polite');
            announcement.textContent = `${tabName.charAt(0).toUpperCase() + tabName.slice(1)} tab is now active`;
            document.body.appendChild(announcement);
            setTimeout(() => {
              document.body.removeChild(announcement);
            }, 1000);
          }
        }
      });
    });
    // Observe tab changes
    document.querySelectorAll('nav a').forEach(tab => {
      tabObserver.observe(tab, { attributes: true });
    });
    // Page load animations
    window.addEventListener('load', function() {
      // Animate stats counter
      document.querySelectorAll('.stat-value').forEach(stat => {
        const value = stat.textContent;
        const isPercentage = value.includes('%');
        const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
        stat.textContent = isPercentage ? '0%' : '0';
        let current = 0;
        const duration = 2000;
        const increment = numericValue / (duration / 16);
        if (numericValue > 0) {
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              current = numericValue;
              clearInterval(timer);
            }
            stat.textContent = isPercentage ? 
              Math.floor(current) + '%' : 
              Math.floor(current).toLocaleString();
          }, 16);
        }
      });
      // Animate section titles
      document.querySelectorAll('.section-title').forEach((title, index) => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        setTimeout(() => {
          title.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          title.style.opacity = '1';
          title.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
      });
    });
    // Battery saver mode simulation
    let batterySaverMode = false;
    function checkBatteryLevel() {
      // Simulated battery check
      if (Math.random() < 0.05 && !batterySaverMode) { // 5% chance to trigger
        batterySaverMode = true;
        // Show notification
        const notification = document.createElement('div');
        notification.className = 'notification warning';
        notification.innerHTML = `
          <div class="notification-icon">🔋</div>
          <div>
            <strong>Battery Saver Activated:</strong> System has switched to low-power mode to conserve battery.
          </div>
        `;
        document.body.insertBefore(notification, document.body.firstChild);
        // Disable animations and non-essential features
        document.body.style.animation = 'none';
        document.querySelectorAll('.floating-drop, .floating, .badge-animated').forEach(el => {
          el.style.animation = 'none';
        });
        // Remove notification after 5 seconds
        setTimeout(() => {
          notification.style.opacity = '0';
          setTimeout(() => {
            notification.remove();
          }, 500);
        }, 5000);
      }
    }
    // Check battery level periodically
    setInterval(checkBatteryLevel, 30000);
    // Enhanced hover effects for cards
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
      });
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
    // Micro-interactions for buttons
    document.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
      });
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
      btn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(1px)';
      });
      btn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-3px)';
        setTimeout(() => {
          this.style.transform = 'translateY(0)';
        }, 150);
      });
    });
    // SEO - update document title based on active tab
    function updateDocumentTitle() {
      const activeTab = document.querySelector('nav a.active');
      if (activeTab) {
        const tabName = activeTab.getAttribute('data-tab');
        document.title = `🩸 ${tabName.charAt(0).toUpperCase() + tabName.slice(1)} - Blood Donation Management System`;
      }
    }
    // Update title when tab changes
    document.querySelectorAll('nav a').forEach(tab => {
      tab.addEventListener('click', updateDocumentTitle);
    });
    // Initial title update
    updateDocumentTitle();

  //emergency full
  document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("showEmergencyForm");
  const cancelBtn = document.getElementById("cancelEmergencyForm");
  const emergencyForm = document.getElementById("emergencyForm");

  // Show Emergency Request Form
  showBtn.addEventListener("click", () => {
    emergencyForm.style.display = "block";
    showBtn.style.display = "none"; // hide button when form is shown
  });

  // Cancel Emergency Request Form
  cancelBtn.addEventListener("click", () => {
    emergencyForm.reset();
    emergencyForm.style.display = "none";
    showBtn.style.display = "inline-block"; // show create button again
  });

  // Handle Form Submission
  emergencyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Grab values (you can later send them to backend)
    const formData = new FormData(emergencyForm);
    const patientName = formData.get("patientName") || "Unknown";
    const bloodGroup = formData.get("bloodGroup") || "N/A";
    const urgency = formData.get("urgency") || "N/A";

    alert(
      `✅ Emergency Request Submitted!\n\nPatient: ${patientName}\nBlood Group: ${bloodGroup}\nUrgency: ${urgency}`
    );

    // Reset & hide form
    emergencyForm.reset();
    emergencyForm.style.display = "none";
    showBtn.style.display = "inline-block";
  });

  // Optional: Highlight critical rows in table
  document.querySelectorAll("tr.emergency-alert").forEach((row) => {
    row.classList.add("blinking-alert");
  });
});
