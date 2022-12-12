const express = require('express');
const path = require('path');
const port = 8000;

const mongoose = require('./config/mongoose');

const Contact = require('./models/contact');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
//MIDDLEWARE 1

// app.use(function(req, res, next){
//     console.log('middleware1');
//     next();
// })


var contactList = [
    {
        name : 'ashu',
        phone : '1231904183'
    },
    {
        name : 'anuj',
        phone : '2342213211'
    },
    {
        name : 'honey',
        phone : '2343121314'
    }
]

app.post('/create', function(req, res){
    // return res.redirect('/practice');
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    });
    Contact.create({
        name: req.body.name,
        phone:req.body.phone
    }, function(err, newContact){
        if(err){console.log('error while creating contact');
        return;
        }
        console.log('*******', newContact);
        return res.redirect('back');1
    })
    // return res.redirect('/');
})

app.get('/',function(req, res){
    // res.end('yes its working!');

    Contact.find({}, function(err, contacts){
        if(err){
            console.log('error while getting data from db');
            return;
        }
        return res.render('home', {
                title : "My Contact List",
                contact_list : contacts
            });
    })
});

app.get('/practice', function(req, res){
    res.render('practice',{
        title : "Its My List",
        
    });
});

app.get('/profile',function(req, res){
    res.end('its profile!');
});

app.get('/about',function(req, res){
    res.end('its about!');
});

app.get('/delete-contact/',function(req,res){
    let id = req.query.id;

    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error while deleting'); return;
        }
        return res.redirect('back');
    })
    // let contactIndex = contactList.findIndex(contact => contact.phone==phone);

    // if(contactIndex != -1)
    // {
    //     contactList.splice(contactIndex, 1);
    // }

    
});

app.listen(port, function(err){
    if(err){
        console.log('error found', err);
    }
    console.log('yup server is working');
});