import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const Card = ({
  title,
  description,
  image,
  footer,
  children,
  className = "",
}: CardProps) => {
  return (
    <div className={`card bg-base-200 shadow-md ${className}`}>
      {image && (
        <figure>
          <img src={image} alt={title} />
        </figure>
      )}

      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}

        {description && <p>{description}</p>}

        {children}

        {footer && <div className="card-actions justify-end">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
