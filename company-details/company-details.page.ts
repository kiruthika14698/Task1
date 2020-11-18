import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.page.html',
  styleUrls: ['./company-details.page.scss'],
})
export class CompanyDetailsPage implements OnInit {

  office: any

  constructor(private alertController: AlertController) {
    this.office=[
      { 
        id:'1',
       type:'IT',
       title:'TCS',
       location:'Chennai',
       role: 'developer',
       description:'This is IT company',
      },
      { 
        id:'2',
       type:'NON-IT',
       title:'JSW',
       location:'Bangalore',
       role: 'voics process',
       description:'This is Non-It company ',
      }
    ]
   }
   async addOffice() {
    const alert = await this.alertController.create({
      header: 'New Office!',
      backdropDismiss:false,
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Enter Title'
        },
        {
          name: 'location',
          type: 'text',
          placeholder: 'Enter Location'
        },
        {
          name: 'description',
          type: 'text',
          placeholder: 'Enter Description'
        },
      ],
      buttons: [
        {
          text: 'Save as IT-Office',
          handler: (data) => {
            let newItem={
              id:Math.random(),
              type:'IT-Office',
              location:data.location,
              title:data.title,
              description:data.description,
            }
            this.addOffices(newItem)
            console.log('IT-Office',newItem);
          }
        },
        {
          text: 'Save as Non-IT',
          handler: (data) => {
            let newItem={
              id:Math.random(),
              type:'Non-IT Office',
              location:data.location,
              title:data.title,
              description:data.description,
            }
            this.addOffices(newItem)
            console.log('Non-IT Office',data);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
      ]
    });
    await alert.present();
  }
  addOffices(data){
    this.office.push(data)
  }

  ngOnInit() {
  }

  //delete item
  deleteItem(o){
    this.office= this.office.filter(
      (item)=>{
      return o.id != item.id
      })
  }
  //edit
  editItem(o){
    this.editOffice(o.title,o.location,o.description,o.id)
  }
  
  async editOffice(title='',location='',description='',id) {
    const alert = await this.alertController.create({
      header: 'New IT-Office!',
      backdropDismiss:false,
      inputs: [
        {
          name: 'title',
          type: 'text',
          value:title,
          placeholder: 'Enter Title'
        },
        {
          name: 'location',
          type: 'text',
          value:location,
          placeholder: 'Enter location'
        },
        {
          name: 'description',
          type: 'text',
          value:description,
          placeholder: 'Enter Description'
        },
      ],
      buttons: [
        {
          text: 'Save',
          handler: (data) => {
           this.office.map((item)=>{
             if(item.id == id)
             {
               item.title=data.title,
               item.location=data.location,
               item.description=data.description
             }
           })
            console.log("save",data);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
      ]
    });
    await alert.present();
  }

}
