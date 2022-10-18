import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { TextInput, Label, Button, Checkbox, Textarea, Radio } from 'flowbite-react';
import './SignUpForm.css';


export default class signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    role: '',
    organization: '',
    location: '',
    links: '',
    about: '',
    jobDescription: '',
    error: '',
    isMentor: false,
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      console.log(formData)
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    // console.log(evt.target.checked, evt.target.name)
    if (evt.target.checked === true && evt.target.id === "mentorRadio") this.state.isMentor = true;
    if (evt.target.checked === true && evt.target.id === "applicantRadio") this.state.isMentor = false;
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }
  render() {
    const disable = (this.state.password !== this.state.confirm) || (this.state.password < 3);

    return (
      <form className="pt-8 sign-up-form" autoComplete="off" onSubmit={this.handleSubmit}>
        <div className='col-span-full mb-10'>
          <h1 className='text-5xl font-bold mb-4'>Welcome!</h1>
          <p className='col-span-full'>Connect with guides and learn about grant opportunities</p>
        </div>
        <section className='grid grid-cols-2 gap-16 mb-4'>
          <section className='flex flex-col gap-4'>
            <section className='grid grid-cols-2 gap-x-12'>
              <div>
                <Label htmlFor="firstName" value="First Name" />
                <TextInput id="firstName" type="text" name="firstName" required={true} onChange={this.handleChange} />
              </div>
              <div>
                <Label htmlFor="lastname" value="Last Name" />
                <TextInput id="lastname" type="text" name="lastName" required={true} onChange={this.handleChange} />
              </div>
            </section>
            <div>
              <Label htmlFor="email" value="Your email" />
              <TextInput id="email" type="email" name="email" required={true} onChange={this.handleChange} />
            </div>
            <div>
              <Label htmlFor="password" value="Your password" />
              <TextInput id="password" type="password" name='password' required={true} value={this.state.password} onChange={this.handleChange} />
            </div>
            <div>
              <Label htmlFor="confirm" value="Confirm Password" />
              <TextInput id="confirm" type="password" name='confirm' required={true} value={this.state.confirm} onChange={this.handleChange} />
            </div>
            <div>
              <p>I am a:</p>
              <div className='flex gap-6'>
                <div className="flex items-center gap-2">
                  <Radio id="applicantRadio" name="mentorRadio" value={undefined} defaultChecked={true} onChange={this.handleChange} />
                  <Label htmlFor="applicantRadio"> Grant Seeker </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="mentorRadio" name="mentorRadio" value={this.state.isMentor} onChange={this.handleChange} checked={this.state.isMentor} />
                  <Label htmlFor="mentorRadio"> Grant Guide</Label>
                </div>
              </div>
            </div>
          </section>
          <section className='flex flex-col gap-4'>
            <div>
              <Label htmlFor="role" value="Role" />
              <TextInput id="role" type="text" name="role" required={true} value={this.state.role} onChange={this.handleChange} />
            </div>
            <div>
              <Label htmlFor="organization" value="Organization" />
              <TextInput id="organization" type="text" name="organization" required={true} value={this.state.organization} onChange={this.handleChange} />
            </div>
            <div>
              <Label htmlFor="about" value="About Me" />
              <Textarea id="about" required={true} name="about" value={this.state.about} onChange={this.handleChange} />
            </div>
            <div>
              <Label htmlFor="jobDescription" value="Job Description" />
              <Textarea id="jobDescription" required={true} name="jobDescription" value={this.state.jobDescription} onChange={this.handleChange} />
            </div>
          </section>
        </section>
        <button disabled={disable} className='enabled:cursor-pointer enabled:bg-primary-500 enabled:text-white disabled:cursor-not-allowed: disabled:bg-neutral-300 disabled:text-neutral-200 rounded py-2 px-16 d' type="submit">SUBMIT</button>
        <p className="error-message">{this.state.error}</p>
      </form>
    )
  }
}