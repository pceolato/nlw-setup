interface HabitProps {
    completed: number;
}

export function Habit({ completed }: HabitProps) {
    return (
        <div className="flex justify-center items-center rounded h-10 w-10 bg-zinc-900 text-white m-2">
            {completed}
        </div>
    )
}