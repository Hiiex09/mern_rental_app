import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "error";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}

const variantStyles = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  error: "btn-error",
};

const sizeStyles = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const Button = ({
  text,
  children,
  icon,
  iconPosition = "left",
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`
        btn
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        inline-flex items-center gap-2
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && icon}

      {children || text}

      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
