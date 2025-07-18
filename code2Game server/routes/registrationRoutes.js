import express from 'express';
import Registration from '../models/Registration.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { FullName, Email, Phone, Course, Message } = req.body;
    if (!FullName || !Email || !Phone || !Course || !Message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newRegistration = new Registration({
      FullName,
      Email,
      Phone,
      Course,
      Message,
    });

    await newRegistration.save();

    res.status(201).json({ message: 'Registration saved successfully' });
  } catch (err) {
    console.error('Error saving to DB:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete('/registrations/:id',async(req,res)=>{
  try{
    await Registration.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'Deleted'});
  }catch(error){
     res.status(500).json({ error: error.message });
     console.log(error)
  }
})

export default router;
