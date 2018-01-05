import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => <p>Please <Link to="/signin">sign in</Link> to manage your bucket list.</p>;

export default Hello;
