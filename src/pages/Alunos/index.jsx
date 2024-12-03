import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import React from "react";
import { Lista } from "../../components/Lista";



export const Alunos = () =>{
	return (
		<div>
			<h1>Alunos</h1>
			<div>
				<input type="search" placeholder="Pesquise um aluno" />
				<button>Cadastrar Aluno</button>
				<Dialog.Root>
	<Dialog.Trigger>
		<Button>Edit profile</Button>
	</Dialog.Trigger>

	<Dialog.Content maxWidth="450px">
		<Dialog.Title>Edit profile</Dialog.Title>
		<Dialog.Description size="2" mb="4">
			Make changes to your profile.
		</Dialog.Description>

		<Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Name
				</Text>
				<TextField.Root
					defaultValue="Freja Johnsen"
					placeholder="Enter your full name"
				/>
			</label>
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Email
				</Text>
				<TextField.Root
					defaultValue="freja@example.com"
					placeholder="Enter your email"
				/>
			</label>
		</Flex>

		<Flex gap="3" mt="4" justify="end">
			<Dialog.Close>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</Dialog.Close>
			<Dialog.Close>
				<Button>Save</Button>
			</Dialog.Close>
		</Flex>
	</Dialog.Content>
</Dialog.Root>
			</div>

			<div>
				<Lista name1='Caio' name2='Bruna' name3='Xopi'/>
			</div>

		</div>

	)
}
