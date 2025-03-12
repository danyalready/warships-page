interface Props {
    size?: string | number | undefined;
}

export default function ToTopIcon({ size = 24 }: Props) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 29.0896L32 2L59 29.0896L52.6182 35L32 14.3134L11.3818 35L5 29.0896Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 56.0896L32 29L59 56.0896L52.6182 62L32 41.3134L11.3818 62L5 56.0896Z"
                fill="currentColor"
            />
        </svg>
    );
}
