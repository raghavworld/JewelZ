import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  Button,
  Checkbox,
  Flex,
  TextField,
  Dialog,
  Text,
} from "@radix-ui/themes";
import axios from "axios";
import { validateUser } from "../services/userValidator";

const items = [
  {
    title: "Shop",
    link: "/shop",
    children: [
      {
        title: "Trending",
        link: "/shop/trending",
        children: [
          { title: "earrings", link: "/products/earrings" },
          { title: "necklaces", link: "/products/necklaces" },
          { title: "rings", link: "/products/rings" },
        ],
      },
      { title: "Classics", link: "/shop/classics" },
    ],
  },
  {
    title: "Products",
    link: "/products",
    children: [
      { title: "earrings", link: "/products/earrings" },
      { title: "necklaces", link: "/products/necklaces" },
      { title: "rings", link: "/products/rings" },
    ],
  },
  { title: "Contact", link: "/contact" },
  { title: "About", link: "/about" },
];

const MenuItem = ({ items, depth = 1, classExtra = "" }) => {
  //Coed here
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className={`relative text-xs font-medium hover:bg-charcoal flex items-center ${classExtra} overflow-visible transition-all duration-200 ease-in-out md:py-2 justify-center`}
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div
        className={`flex items-center ${classExtra} transition-all ease-in-out py-2 justify-center`}
      >
        <div className="text-gold cursor-pointer uppercase">{items.title}</div>
        {items.children?.length > 0 && (
          <span className="flex w-4 h-4 items-center">
            <ChevronDown />
          </span>
        )}
        {items.children?.length > 0 && dropdownOpen && depth <= 1 && (
          <div className="absolute top-[2.5rem] bg-gray-100 shadow-lg rounded-lg m-2 transition-all duration-200 ease-in-out">
            {items.children.map((item, idx) => (
              <MenuItem
                key={idx}
                items={item}
                classExtra="text-gold transition-all px-6"
                depth={depth + 1}
              />
            ))}
          </div>
        )}
        {items.children?.length > 0 && dropdownOpen && depth > 1 && (
          <div className="absolute top-0 md:-right-[10rem] bg-gray-100 shadow-lg rounded-lg mt-2 transition-all duration-200 ease-in-out">
            {items.children.map((item, idx) => (
              <MenuItem
                key={idx}
                items={item}
                classExtra="object-contain cursor-pointer px-6"
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const NavbarPublic = () => {
  const [togglePass, setTogglePass] = useState("password");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e, email, password) => {
    const okUser = validateUser({ email, password });
    if (okUser !== true) {
      setError(okUser);
      console.log(error);
    }
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const data = { email, password };
    const response = await axios.post(
      "http://localhost:4001/jewelz/api/v1/user/login",
      data,
      config
    );
    console.log(response?.data);
    localStorage.setItem("token",response?.data?.token)
  };

  return (
    <div className="z-[5] items-baseline grid grid-cols-12 fixed w-full text-white bg-[#fbf6f3] mb-6 shadow-md sm:top-7 md:top-8">
      <div className="flex items-center justify-center pt-[3px] col-span-4 md:col-span-4 sm:ml-[10rem] lg:col-span-4 flex-row-reverse">
        <Link to="/" className="text-2xl text-gold font-[500]">
          Jewel-Z
        </Link>
      </div>

      <div className="flex col-span-6 ml-5 md:col-span-6 sm:col-span-10 lg:col-span-5 justify-center">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            items={item}
            classExtra="text-gold object-contain cursor-pointer px-4"
          />
        ))}
      </div>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button
            className="hover:bg-charcoal hover:text-gold"
            color="amber"
            variant="soft"
            style={{ cursor: "pointer" }}
          >
            Login
          </Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Flex direction="column" gap="3">
            <label>
              <Text className="text-sm text-gold font-[500]">E-mail</Text>
              <TextField.Root
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="your awkward email here"
              />
            </label>

            <label>
              <Text className="text-sm text-gold font-[500]">Password</Text>
              <TextField.Root
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={togglePass}
                placeholder="think of strong a password"
              />
            </label>

            <label className="text-sm flex items-center gap-1">
              <span className="text-sm text-gold font-[500]">
                Show Password
              </span>
              <Checkbox
                onClick={() =>
                  setTogglePass((prev) =>
                    prev === "password" ? "text" : "password"
                  )
                }
                size="1"
              />
            </label>
            {error && (
              <Text className="text-sm text-red-600 font-[500]">{error}</Text>
            )}

            <Button
              className="hover:bg-charcoal hover:text-gold"
              color="amber"
              variant="soft"
              style={{ cursor: "pointer" }}
              onClick={(e) => handleSignUp(e, email, password)}
            >
              Login
            </Button>
          </Flex>
          <label htmlFor="">
            <Text className="text-xs font-light">
              {" "}
              Using it for the First Time?
            </Text>
          </label>
          <Dialog.Root>
            <Dialog.Trigger>
              <span
                className="ml-1 text-xs  text-gold"
                color="amber"
                variant="soft"
                style={{ cursor: "pointer" }}
              >
                Sign-Up
              </span>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="450px">
              <Flex direction="column" gap="3">
                <label>
                  <Text className="text-sm text-gold font-[500]">E-mail</Text>
                  <TextField.Root
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="your awkward email here"
                  />
                </label>

                <label>
                  <Text className="text-sm text-gold font-[500]">Password</Text>
                  <TextField.Root
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={togglePass}
                    placeholder="think of strong a password"
                  />
                </label>

                <label className="text-sm flex items-center gap-1">
                  <span className="text-sm text-gold font-[500]">
                    Show Password
                  </span>
                  <Checkbox
                    onClick={() =>
                      setTogglePass((prev) =>
                        prev === "password" ? "text" : "password"
                      )
                    }
                    size="1"
                  />
                </label>
                {error && (
                  <Text className="text-sm text-red-600 font-[500]">
                    {error}
                  </Text>
                )}

                <Button
                  className="hover:bg-charcoal hover:text-gold"
                  color="amber"
                  variant="soft"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleSignUp(e, email, password)}
                >
                  Sign Up
                </Button>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default NavbarPublic;
