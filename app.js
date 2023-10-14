   // JavaScript code to handle form submission and application tracking
   const applicationForm = document.getElementById('application-form');
   const applicationTable = document.getElementById('application-table');
   
   applicationForm.addEventListener('submit', function (e) {
       e.preventDefault();
       
       const companyName = document.getElementById('company-name').value;
       const position = document.getElementById('position').value;
       const status = document.getElementById('application-status').value;
       
       const newRow = document.createElement('tr');
       newRow.innerHTML = `
           <td>${companyName}</td>
           <td>${position}</td>
           <td>${status}</td>
           <td><button onclick="deleteRow(this)">Delete</button></td>
       `;
       
       applicationTable.querySelector('tbody').appendChild(newRow);
       
       // Clear form fields
       applicationForm.reset();
   });

   function deleteRow(button) {
       const row = button.parentElement.parentElement;
       row.remove();
   }