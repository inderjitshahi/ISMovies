import User from '../modal/user.js'

export async function create(req, res, next) {
    // console.log(req.body);
    const {name,email,password}=req.body;

    const oldUser= await User.findOne({email});
    if(oldUser)return res.status(401).json({erroe:"This email already exists!!"});

    const newUser=new User({name:name,email:email,password:password});
    await newUser.save();
    res.status(201).json({user:newUser});
};